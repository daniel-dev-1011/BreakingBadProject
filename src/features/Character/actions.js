import * as actionTypes from './actionTypes'

export const getCharacterDetail = (char_id) => ({
  type: actionTypes.GET_CHARACTER_DETAIL,
  char_id
})

export const getCharacterDetailFailed = (error) => ({
  type: actionTypes.GET_CHARACTER_DETAIL_FAILURE,
  error
})

export const getCharacterDetailSuccess = (data) => ({
  type: actionTypes.GET_CHARACTER_DETAIL_SUCCESS,
  data
})

export const getQuote = (data) => ({
  type: actionTypes.GET_QUOTE,
  data
})

export const getQuoteFailed = (error) => ({
  type: actionTypes.GET_QUOTE_FAILURE,
  error
})

export const getQuoteSuccess = (data) => ({
  type: actionTypes.GET_QUOTE_SUCCESS,
  data
})

