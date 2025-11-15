import { THEME_MODE } from "../../ActionType/ThemeMode";

export const themeMode = (state = false, action) => {
  const { type, payload } = action;
  switch (type) {
    case THEME_MODE:
      return payload;
    default:
      return state;
  }
};
