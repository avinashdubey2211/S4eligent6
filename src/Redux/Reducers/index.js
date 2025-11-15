import { combineReducers } from "redux";
import { themeMode } from "./ThemeMode";
import { state } from "./State";

export const rootReducer = combineReducers({
  themeMode,
  state,
});
