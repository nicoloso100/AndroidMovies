import {SET_MOVIE_DETAILS, SET_MOVIE_CASTING} from '@utils/constants';
import {MovieDetailsInterface, MovieCastingInterface} from 'interfaces';

export interface SendMovieAction {
  type: typeof SET_MOVIE_DETAILS;
  payload: MovieDetailsInterface;
}

export interface SendCastingAction {
  type: typeof SET_MOVIE_CASTING;
  payload: MovieCastingInterface;
}

export type MovieDetailsActionType = SendMovieAction | SendCastingAction;

export interface MovieDetailsReducer {
  movie: MovieDetailsInterface | null;
  casting: MovieCastingInterface | null;
}

const initialState: MovieDetailsReducer = {
  movie: null,
  casting: null,
};

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
