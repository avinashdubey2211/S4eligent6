import { THEME_MODE } from "../../ActionType/ThemeMode";

export const setThemeMode = (payload) => {
  return {
    type: THEME_MODE,
    payload,
  };
};
