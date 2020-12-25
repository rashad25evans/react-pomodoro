export const actions = {
  START_STOP_TIMER: "START_STOP_TIMER",
  RESET_TIMER: "RESET_TIMER",
};

export const startStopTimer = (payload) => ({
  type: actions.START_STOP_TIMER,
  payload,
});

export const resetTimer = () => ({
  type: actions.RESET_TIMER,
});
