import { combineReducers } from "redux";
import home from "../features/Home/reducers";
import character from "../features/Character/reducers";
import comments from "../features/Comments/reducers";

const reducers = combineReducers({
  home,
  character,
  comments
});

const rootReducer = (state, action) => {
  return reducers(state, action)
};

export default rootReducer;