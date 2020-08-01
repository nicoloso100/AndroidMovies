import {MovieDetailsInterface, MovieCastingInterface} from 'interfaces';
import {
  SendMovieAction,
  SendCastingAction,
} from '@reducers/movie-details-reducer';
import {SET_MOVIE_DETAILS, SET_MOVIE_CASTING} from '@utils/constants';

export function updateMovieDetails(
  movie: MovieDetailsInterface,
): SendMovieAction {
  return {
    type: SET_MOVIE_DETAILS,
    payload: movie,
  };
}

export function updateMovieCasting(
  movie: MovieCastingInterface,
): SendCastingAction {
  return {
    type: SET_MOVIE_CASTING,
    payload: movie,
  };
}
