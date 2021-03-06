import React from "react";
import { connect } from "react-redux";
import {
  incrementBreakLength,
  decrementBreakLength,
} from "../actions/break.action";

const Break = (props) => {
  const { increment, decrement, breakLength } = props;
  return (
    <>
      <div id="break-label">Break Length</div>
      <div id="break-length">{breakLength}</div>
      <button id="break-increment" onClick={increment}>
        break-increment
      </button>
      <button id="break-decrement" onClick={decrement}>
        break-decrement
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  breakLength: state.break.breakLength,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementBreakLength()),
  decrement: () => dispatch(decrementBreakLength()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Break);
