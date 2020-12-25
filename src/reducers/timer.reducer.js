import { act } from "react-dom/test-utils";
import { actions as startStop } from "../actions/timer.action";
import { actions as reset } from "../actions/timer.action";

const timerReducer = (state = [], action) => {
  switch (action.type) {
    case startStop.START_STOP_TIMER:
      console.log(action.payload);
      return {
        ...state,
        time: action.payload,
      };

    // case reset.RESET_TIMER:
    //   return {
    //     sessionLenght: 25,
    //     breakLength: 5,
    //   };

    default:
      return state;
  }
};

export default timerReducer;
