import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { startStopTimer } from "../actions/timer.action";
import { resetBreakLength } from "../actions/break.action";
import { resetSessionLength } from "../actions/session.action";

const Timer = (props) => {
  const {
    sessionLenght,
    breakLength,
    resetBreakLength,
    resetSessionLength,
    startStopTimer,
  } = props;

  const timerFormat = moment(
    `${sessionLenght} : ${breakLength}`,
    "mm:ss"
  ).format("mm:ss");

  return (
    <>
      <div id="timer-label">{sessionLenght}</div>
      <div id="timer-left">{timerFormat}</div>
      <button id="start_stop" onClick={startStopTimer}>
        Start/Stop
      </button>
      <button
        id="reset"
        onClick={() => {
          resetBreakLength();
          resetSessionLength();
        }}
      >
        Reset
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  sessionLenght: state.session.sessionLenght,
  breakLength: state.break.breakLength,
});

const mapDispatchToProps = (dispatch) => ({
  startStopTimer: () => dispatch(startStopTimer()),
  resetBreakLength: () => dispatch(resetBreakLength()),
  resetSessionLength: () => dispatch(resetSessionLength()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
