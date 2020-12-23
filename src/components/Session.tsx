import React from "react";
import { connect } from "react-redux";
import {
  incrementSessionLength,
  decrementSessionLength,
} from "../actions/session.action";

const Session = (props: any) => {
  const { increment, decrement, sessionLenght } = props;
  return (
    <>
      <div id="session-label">Session Length</div>
      <div id="session-length">{sessionLenght}</div>
      <button id="session-increment" onClick={increment}>
        session-increment
      </button>
      <button id="session-decrement" onClick={decrement}>
        session-decrement
      </button>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  sessionLenght: state.session.sessionLenght,
});

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => dispatch(incrementSessionLength()),
  decrement: () => dispatch(decrementSessionLength()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Session);
