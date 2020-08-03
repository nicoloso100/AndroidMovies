import {MovieDetailsInterface, MovieCastingInterface} from 'interfaces';
import {
  SendMovieAction,
  SendCastingAction,
} from '@reducers/movie-details-reducer';
import {SET_MOVIE_DETAILS, SET_MOVIE_CASTING} from '@utils/constants';

/**
 * Action de redux para almacenar el detalle de una película
 * @param movie Objeto de detalle de la película
 */
export function updateMovieDetails(
  movie: MovieDetailsInterface,
): SendMovieAction {
  return {
    type: SET_MOVIE_DETAILS,
    payload: movie,
  };
}

/**
 * Action de redux para almacenar el casting de una película
 * @param movie Objeto de detalle del casting de una película
 */
export function updateMovieCasting(
  movie: MovieCastingInterface,
): SendCastingAction {
  return {
    type: SET_MOVIE_CASTING,
    payload: movie,
  };
}
