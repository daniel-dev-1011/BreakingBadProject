import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as actionTypes from './actionTypes';
import persist from '../../services/persist';
import { PERSIST_PARAMS } from '../../constants/constants';

function* getCommentsSaga(action) {
  try {
    yield put(actions.getCommentsSuccess(action.data));
  } catch (error) {
    yield put(actions.getCommentsFailed(error))
  }
}

function* sendCommentSaga(action) {
  try {
    persist.save(PERSIST_PARAMS.comments, action.data)
    yield put(actions.sendCommentSuccess());
  } catch (error) {
    yield put(actions.sendCommentFailed(error))
  }
}

export default [
  takeLatest(actionTypes.GET_COMMENTS, getCommentsSaga),
  takeLatest(actionTypes.SEND_COMMENT, sendCommentSaga),
]