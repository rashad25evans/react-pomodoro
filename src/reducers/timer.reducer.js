import { actions as startStop } from "../actions/timer.action";
import { actions as reset } from "../actions/timer.action";

const initialState = {
  breakLength: 5,
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case startStop.START_STOP_TIMER:
      return {
        breakLength: 6,
      };
    case reset.RESET_TIMER:
      return {
        breakLength: 5,
      };

    default:
      return state;
  }
};

export default timerReducer;
