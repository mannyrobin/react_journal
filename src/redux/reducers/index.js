import { combineReducers } from 'redux';
import themeReducer from './theme.reducer';
import feelsReducer from './feels.reducer';

export default combineReducers({
  theme: themeReducer,
  feel: feelsReducer,
});
