import { legacy_createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { MoviesReducer } from '../movies/reducers';
import { FavouritesReducer } from '../favourites/reducers'

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      movies: MoviesReducer,
      favourites: FavouritesReducer
    }),
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), thunk),
    )
  );
}