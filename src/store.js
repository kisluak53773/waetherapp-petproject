import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./slices/index";

const store = configureStore({
  reducer: rootReducer,
});

export const getStoreWithState = (preloadedState = {}) => {
  return configureStore({ reducer: rootReducer, preloadedState });
};

export default store;
