import * as ActionTypes from './ActionTypes';

const initialState = {
	isLoading: true,
	errorMsg: null,
	results: []
}

export const SearchResults = (state = initialState, action) => {
	switch(action.type) {
		case ActionTypes.SEARCH_RESULTS_LOADING:
		return {
			...state,
			isLoading: true,
			errorMsg: null,
			results: []
		}

		case ActionTypes.ADD_SEARCH_RESULTS:
		return {
			...state,
			isLoading: false,
			errorMsg: null,
			results: action.payload
		}

		case ActionTypes.SEARCH_RESULTS_FAILED:
		return {
			...state,
			isLoading: false,
			errorMsg: action.payload,
			results: []
		}

		default:
		return state
	}
}