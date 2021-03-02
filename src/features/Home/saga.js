import { call, put, takeLatest, all } from 'redux-saga/effects';
import { api } from "../../api";
import * as actions from './actions';
import * as actionTypes from './actionTypes';

function* getAllCharactersSaga(action) {
  try {
    const result = yield call(api.home.getAllCharacters, action.data)
    yield put(actions.getAllCharactersSuccess(result.data || []));
  } catch (error) {
    yield put(actions.getAllCharactersFailed(error))
  }
}

export default [
  takeLatest(actionTypes.GET_LIST_CHARACTERS, getAllCharactersSaga),
]