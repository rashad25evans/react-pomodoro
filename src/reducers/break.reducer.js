import { actions as increment } from "../actions/break.action";
import { actions as decrement } from "../actions/break.action";
import { actions as reset } from "../actions/break.action";

const initialState = {
  breakLength: 5,
};

const breakReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment.INCREMENT_BREAK_LENGTH:
      return {
        breakLength: state.breakLength >= 59 ? 0 : state.breakLength + 1,
      };
    case decrement.DECREMENT_BREAK_LENGTH:
      return {
        breakLength:
          state.breakLength <= 0 ? state.breakLength : state.breakLength - 1,
      };
    case reset.RESET_BREAK_LENGTH:
      return {
        breakLength: 5,
      };

    default:
      return state;
  }
};

export default breakReducer;
