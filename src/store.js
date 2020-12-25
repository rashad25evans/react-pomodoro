import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./reducers";

const intialState = {
  breakLength: 34,
};

// const middleware = [thunk];

const store = createStore(
  rootReducer,
  intialState,
  // applyMiddleware(...middleware)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
