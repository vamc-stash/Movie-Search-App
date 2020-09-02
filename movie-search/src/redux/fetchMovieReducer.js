import * as ActionTypes from './ActionTypes';

const initialState = {
	isLoading: true,
	errorMsg: null,
	movie: []
}

export const FetchMovie = (state = initialState, action) => {
	switch(action.type) {
		case ActionTypes.MOVIE_FETCH_LOADING:
		return {
			...state,
			isLoading: true,
			errorMsg: null,
			movie: []
		}

		case ActionTypes.ADD_MOVIE:
		return {
			...state,
			isLoading: false,
			errorMsg: null,
			movie: action.payload
		}

		case ActionTypes.MOVIE_FETCH_FAILED:
		return {
			...state,
			isLoading: false,
			errorMsg: action.payload,
			movie: []
		}

		default:
		return state
	}
}