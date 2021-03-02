import * as actionTypes from './actionTypes'

export const getComments = (data) => ({
  type: actionTypes.GET_COMMENTS,
  data
})

export const getCommentsFailed = (error) => ({
  type: actionTypes.GET_COMMENTS_FAILURE,
  error
})

export const getCommentsSuccess = (data) => ({
  type: actionTypes.GET_COMMENTS_SUCCESS,
  data
})

export const sendComment = (data) => ({
  type: actionTypes.SEND_COMMENT,
  data
})

export const sendCommentFailed = (error) => ({
  type: actionTypes.SEND_COMMENT_FAILURE,
  error
})

export const sendCommentSuccess = (data) => ({
  type: actionTypes.SEND_COMMENT_SUCCESS,
  data
})

