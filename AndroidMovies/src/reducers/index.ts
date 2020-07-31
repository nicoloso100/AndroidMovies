import {combineReducers} from 'redux';
import DarkModeReducer from './dark-mode-reducer';

export default combineReducers({
  tabId: DarkModeReducer,
});
