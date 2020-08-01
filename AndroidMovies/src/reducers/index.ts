import {combineReducers} from 'redux';
import DarkModeReducer from './dark-mode-reducer';
import MovieDetailsReducer from './movie-details-reducer';

const rootReducer = combineReducers({
  darkMode: DarkModeReducer,
  movieDetails: MovieDetailsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
