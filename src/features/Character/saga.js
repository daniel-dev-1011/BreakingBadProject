import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from "../../api";
import * as actions from './actions';
import * as actionTypes from './actionTypes';

function* getCharacterDetailSaga(action) {
  try {
    const result = yield call(api.character.getCharacterDetail, action.char_id)
    const data = result.data ? result.data : []
    const name = result.data[0].name.replaceAll(" ", "+")
    yield put(actions.getCharacterDetailSuccess(data));
    yield put(actions.getQuote({ author: name }))
  } catch (error) {
    yield put(actions.getCharacterDetailFailed(error))
  }
}

function* getQuoteSaga(action) {
  try {
    const result = yield call(api.character.getQuote, action.data)
    const data = result.data ? result.data : []
    yield put(actions.getQuoteSuccess(data));
  } catch (error) {
    yield put(actions.getQuote(error))
  }
}

export default [
  takeLatest(actionTypes.GET_CHARACTER_DETAIL, getCharacterDetailSaga),
  takeLatest(actionTypes.GET_QUOTE, getQuoteSaga),
]