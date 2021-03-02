import { all } from 'redux-saga/effects';
import HomeSaga from '../features/Home/saga';
import CharacterSaga from '../features/Character/saga';
import CommentsSaga from '../features/Comments/saga';

function* rootSaga() {
  yield all([
    ...HomeSaga,
    ...CharacterSaga,
    ...CommentsSaga
  ])
}

export default rootSaga;
