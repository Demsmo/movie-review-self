import { Route, Switch} from 'react-router';
import Category from './containers/Category';
import Home from './containers/Home';
import Favourites from './containers/Favourites'
import Search from './containers/Search';

const Router = () => {
    return (
        <>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catagory" component={Category} />
            <Route exact path="/favourites" component={Favourites} />
            <Route exact path="/search" component={Search} />
        </Switch>
        </>    
    );
};
export default Router;
