import * as actionTypes from './actionTypes'

export const getAllCharacters = (data) => ({
  type: actionTypes.GET_LIST_CHARACTERS,
  data
})

export const getAllCharactersSuccess = (data) => ({
  type: actionTypes.GET_LIST_CHARACTERS_SUCCESS,
  data
})

export const getAllCharactersFailed = (error) => ({
  type: actionTypes.GET_LIST_CHARACTERS_FAILURE,
  error
})

