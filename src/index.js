import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import rootReducer from "./redux/mainReducer";
import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  )
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
