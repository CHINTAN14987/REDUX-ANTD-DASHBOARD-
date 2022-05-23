import { combineReducers } from "@reduxjs/toolkit";
import {
  DataReducers,
  stateReducer,
  StateAddItemsReducer,
} from "./DataReducers";

const rootReducer = combineReducers({
  DataReducers,
  stateReducer,
  StateAddItemsReducer,
});

export default rootReducer;
