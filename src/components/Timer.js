import React, { useState, useEffect } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { startStopTimer, resetTimer } from "../actions/timer.action";

const Timer = (props) => {
  const { sessionLenght, breakLength, resetTimer, startStopTimer } = props;
  const [time, setTime] = useState({
    minutes: sessionLenght,
    seconds: breakLength,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime({ minutes: time.minutes - 1, seconds: time.seconds - 1 });
    }, 1000);
    // clearing interval
    return () => clearInterval(timer);
  });

  const timerFormat = moment(
    `${time.minutes} : ${time.seconds}`,
    "mm:ss"
  ).format("mm:ss");

  return (
    <>
      <div id="timer-label">{sessionLenght}</div>
      <div id="timer-left">{timerFormat}</div>
      <button id="start_stop" onClick={() => startStopTimer(timerFormat)}>
        Start/Stop
      </button>
      {/* <button id="" onClick={startTimer}>
        press
      </button> */}
      {/* <button
        id="reset"
        onClick={() => {
          resetBreakLength();
          resetSessionLength();
        }}
      >
        Reset
      </button> */}
      <button id="reset" onClick={resetTimer}>
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
  startStopTimer: (payload) => dispatch(startStopTimer(payload)),
  resetTimer: () => dispatch(resetTimer()),
  // resetBreakLength: () => dispatch(resetBreakLength()),
  // resetSessionLength: () => dispatch(resetSessionLength()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
