import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import counterReducer from "./reducer/CounterReducer";

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function increment() {
  store.dispatch({ type: "INCREMENT" });
}

function decrement() {
  store.dispatch({ type: "DECREMENT" });
}

const Counter = () => {
  return (
    <div>
      <h1>{store.getState()}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const render = () =>
  ReactDOM.render(<Counter />, document.getElementById("root"));
render();

store.subscribe(render);
