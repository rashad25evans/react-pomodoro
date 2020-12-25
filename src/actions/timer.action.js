export const actions = {
  START_STOP_TIMER: "START_STOP_TIMER",
  RESET_TIMER: "RESET_BREAK_LENGTH",
};

export const startStopTimer = () => ({
  type: actions.START_STOP_TIMER,
});

export const resetTimer = () => ({
  type: actions.RESET_TIMER,
});
