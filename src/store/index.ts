import { createStore } from "redux";

const counter = () => ({
  name: "Test"
});

const store = createStore(counter);

export { store };
