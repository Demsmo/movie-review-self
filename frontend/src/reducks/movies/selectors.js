import { createSelector } from 'reselect'

const movieSelector = state => state.movies;

export const getMovies = createSelector([movieSelector], state => state);