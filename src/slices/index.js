import { combineReducers } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";

export default combineReducers({
  [weatherSlice.name]: weatherSlice.reducer,
});
