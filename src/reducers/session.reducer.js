import { actions as increment } from "../actions/session.action";
import { actions as decrement } from "../actions/session.action";

const initialState = {
  sessionLenght: 25,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment.INCREMENT_SESSION_LENGTH:
      return { sessionLenght: state.sessionLenght + 1 };
    case decrement.DECREMENT_SESSION_LENGTH:
      return { sessionLenght: state.sessionLenght - 1 };
    default:
      return state;
  }
};
export default sessionReducer;
