import { SET_THEME_STYLE } from '../actions/actionTypes';
import {
  THEME_TYPE_DARK,
  THEME_TYPE_DARK_BLUE,
  THEME_TYPE_BLUE,
  THEME_TYPE_PINK,
  THEME_TYPE_RED,
} from '../../commons/Constant';
import {
  DefaultTheme,
  DarkTheme,
  DarkBlueTheme,
  BlueTheme,
  PinkTheme,
  RedTheme,
} from '../../themes';

const initialState = {
  theme: DefaultTheme,
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME_STYLE:
      let theme;

      if (action.payload === THEME_TYPE_DARK) {
        theme = DarkTheme;
      } else if (action.payload === THEME_TYPE_DARK_BLUE) {
        theme = DarkBlueTheme;
      } else if (action.payload === THEME_TYPE_BLUE) {
        theme = BlueTheme;
      } else if (action.payload === THEME_TYPE_PINK) {
        theme = PinkTheme;
      } else if (action.payload === THEME_TYPE_RED) {
        theme = RedTheme;
      } else {
        theme = DefaultTheme;
      }

      return { ...state, theme: { ...theme } };

    default:
      return state;
  }
}
