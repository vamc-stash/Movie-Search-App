import * as ActionTypes from './ActionTypes';
import {BASE_DATA_URL} from '../shared/baseURL';
import {API_KEY} from '../shared/APIKey';

//thunk
export const search = (searchValue) => (dispatch) => {
	dispatch(searchResultsLoading())

	return fetch(BASE_DATA_URL + 's=' + searchValue + '&apikey=' + API_KEY)
	.then(res => {
		if(res.ok) {
			return res
		}
		else {
			var error = new Error('Error ' + res.status + ": " + res.statusText)
			error.res = res
			throw error
		}
	}, 
	error => {
		var errorMsg = new Error(error.message)
		throw errorMsg
	})
	.then(res => res.json())
	.then(data => dispatch(addSearchResults(data)))
	.catch(error => dispatch(searchResultsFailed(error.message)))
}

export const searchResultsLoading = () => ({
	type: ActionTypes.SEARCH_RESULTS_LOADING
})

export const searchResultsFailed = (errorMsg) => ({
	type: ActionTypes.SEARCH_RESULTS_FAILED,
	payload: errorMsg
})

export const addSearchResults = (movies) => ({
	type: ActionTypes.ADD_SEARCH_RESULTS,
	payload: movies
})

//thunk
export const fetchMovie = (id) => (dispatch, getState) => {

	dispatch(fetchMovieLoading())

	return fetch(BASE_DATA_URL + 'i=' + id + '&apikey=' + API_KEY)
	.then(res => {
		if(res.ok) {
			return res
		}
		else {
			var error = new Error('Error ' + res.status + ": " + res.statusText)
			error.res = res
			throw error
		}
	}, 
	error => {
		var errorMsg = new Error(error.message)
		throw errorMsg
	})
	.then(res => res.json())
	.then(data => dispatch(addMovie(data)))
	.catch(error => dispatch(fetchMovieFailed(error.message)))
}

export const fetchMovieLoading = () => ({
	type: ActionTypes.MOVIE_FETCH_LOADING
})

export const fetchMovieFailed = (errorMsg) => ({
	type: ActionTypes.MOVIE_FETCH_FAILED,
	payload: errorMsg
})

export const addMovie = (movie) => ({
	type: ActionTypes.ADD_MOVIE,
	payload: movie
})
