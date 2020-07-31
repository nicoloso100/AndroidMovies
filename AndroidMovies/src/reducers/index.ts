import {combineReducers} from 'redux';
import DarkModeReducer from './dark-mode-reducer';

const rootReducer = combineReducers({
  darkMode: DarkModeReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
