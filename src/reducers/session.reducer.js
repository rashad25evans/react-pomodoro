import { actions as increment } from "../actions/session.action";
import { actions as decrement } from "../actions/session.action";
import { actions as reset } from "../actions/session.action";

const initialState = {
  sessionLenght: 25,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment.INCREMENT_SESSION_LENGTH:
      return {
        sessionLenght: state.sessionLenght >= 59 ? 0 : state.sessionLenght + 1,
      };
    case decrement.DECREMENT_SESSION_LENGTH:
      return {
        sessionLenght:
          state.sessionLenght <= 0
            ? state.sessionLenght
            : state.sessionLenght - 1,
      };
    case reset.RESET_SESSION_LENGTH:
      return {
        sessionLenght: 25,
      };
    default:
      return state;
  }
};
export default sessionReducer;
