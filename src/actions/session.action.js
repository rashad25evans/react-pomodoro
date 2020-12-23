export const actions = {
  INCREMENT_SESSION_LENGTH: "INCREMENT_SESSION_LENGTH",
  DECREMENT_SESSION_LENGTH: "DECREMENT_SESSION_LENGTH",
};

export const incrementSessionLength = () => ({
  type: actions.INCREMENT_SESSION_LENGTH,
});

export const decrementSessionLength = () => ({
  type: actions.DECREMENT_SESSION_LENGTH,
});
