import React from "react";
import { connect } from "react-redux";

const Timer = (props: any) => {
  return (
    <>
      <div id="timer-label">{props.session}</div>
      <div id="timer-left">25:00</div>
      <button id="start_stop">Start/Stop</button>
      <button id="reset">Reset</button>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  session: state.session.sessionLenght,
});

export default connect(mapStateToProps)(Timer);
