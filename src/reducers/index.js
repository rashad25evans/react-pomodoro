import { combineReducers } from "redux";
import breakReducer from "./break.reducer";
import sessionReducer from "./session.reducer";
import timerReducer from "./timer.reducer";

export default combineReducers({
  break: breakReducer,
  session: sessionReducer,
  timer: timerReducer,
});
