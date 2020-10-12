import { SET_THEME_STYLE } from '../actions/actionTypes';

export const setThemeStyle = (type) => ({
  type: SET_THEME_STYLE,
  payload: type,
});
