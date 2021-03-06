export const actions = {
  INCREMENT_BREAK_LENGTH: "INCREMENT_BREAK_LENGTH",
  DECREMENT_BREAK_LENGTH: "DECREMENT_BREAK_LENGTH",  
  RESET_BREAK_LENGTH: "RESET_BREAK_LENGTH",
};

export const incrementBreakLength = () => ({
  type: actions.INCREMENT_BREAK_LENGTH,
});

export const decrementBreakLength = () => ({
  type: actions.DECREMENT_BREAK_LENGTH,
});

export const resetBreakLength = () => ({
  type: actions.RESET_BREAK_LENGTH,
});

