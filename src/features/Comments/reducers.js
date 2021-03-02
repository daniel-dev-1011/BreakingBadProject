import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  error: undefined,
  comments: []
}

export default commentsReducer = (state = initialState, action) => {
switch (action.type) {
    case actionTypes.GET_COMMENTS: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        comments: undefined
      }
    }
    case actionTypes.GET_COMMENTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
        comments: action.data
      }
    }
    case actionTypes.GET_COMMENTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.data.error,
        comments: undefined
      }
    }
    case actionTypes.SEND_COMMENT: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        comments: action.data
      }
    }
    case actionTypes.SEND_COMMENT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: undefined,
      }
    }
    case actionTypes.SEND_COMMENT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.data.error,
      }
    }
    default:
      return state
  }
}