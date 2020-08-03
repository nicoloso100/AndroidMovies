import {SET_MOVIE_DETAILS, SET_MOVIE_CASTING} from '@utils/constants';
import {MovieDetailsInterface, MovieCastingInterface} from 'interfaces';

/**
 * Interfaz para el action para Movie
 */
export interface SendMovieAction {
  type: typeof SET_MOVIE_DETAILS;
  payload: MovieDetailsInterface;
}

/**
 * Interfaz para el action para Casting
 */
export interface SendCastingAction {
  type: typeof SET_MOVIE_CASTING;
  payload: MovieCastingInterface;
}

export type MovieDetailsActionType = SendMovieAction | SendCastingAction;

/**
 * Interfaz para el reducer de MovieDetails
 */
export interface MovieDetailsReducer {
  movie: MovieDetailsInterface | null;
  casting: MovieCastingInterface | null;
}

/**
 * Estado inicial del reducer de MovieDetails
 */
const initialState: MovieDetailsReducer = {
  movie: null,
  casting: null,
};

/**
 * Reducer para el MovieDetails
 */
const MovieDetailsReducer = (
  state: MovieDetailsReducer = initialState,
  action: MovieDetailsActionType,
): MovieDetailsReducer => {
  switch (action.type) {
    case SET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload,
      };
    case SET_MOVIE_CASTING:
      return {
        ...state,
        casting: action.payload,
      };
    default:
      return state;
  }
};

export default MovieDetailsReducer;
