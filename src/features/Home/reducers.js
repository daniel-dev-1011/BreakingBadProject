import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  error: undefined,
  characters: [],
  offset: null
}

export default homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LIST_CHARACTERS: {
      return {
        ...state,
        isLoading: true,
        error: undefined,
        offset: action.data.offset
      }
    }
    case actionTypes.GET_LIST_CHARACTERS_SUCCESS: {
      const newList = [...state.characters].concat(action.data)
      return {
        ...state,
        isLoading: false,
        error: undefined,
        characters: newList,
      }
    }
    case actionTypes.GET_LIST_CHARACTERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    }
    default:
      return { 
        ...state
       }
  }
}