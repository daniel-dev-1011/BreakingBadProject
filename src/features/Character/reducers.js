import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  error: undefined,
  character: undefined,
  quote: undefined
}

export default characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CHARACTER_DETAIL: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        character: undefined,
      }
    }
    case actionTypes.GET_CHARACTER_DETAIL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        character: action.data[0],
      }
    }
    case actionTypes.GET_CHARACTER_DETAIL_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        character: undefined,
      }
    }
    case actionTypes.GET_QUOTE: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        quote: undefined,
      }
    }
    case actionTypes.GET_QUOTE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        quote: action.data[0],
      }
    }
    case actionTypes.GET_QUOTE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        quote: undefined,
      }
    }
    default:
      return state
  }
}