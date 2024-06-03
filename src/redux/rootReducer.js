import { combineReducers } from "@reduxjs/toolkit";

import campersReducer from "./campers/campers-slice";

const rootReducer = combineReducers({
  campers: campersReducer,
});

export default rootReducer;
