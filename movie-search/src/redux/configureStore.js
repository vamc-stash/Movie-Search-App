import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {SearchResults} from './searchResultsReducer';
import {FetchMovie} from './fetchMovieReducer';


export const ConfigureStore = () => {

	const store = createStore(
		combineReducers({
			searchResults: SearchResults,
			fetchMovie: FetchMovie
		}),
		applyMiddleware(thunk, logger)
		);

	return store;
}