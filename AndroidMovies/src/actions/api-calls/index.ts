import {APIBase, APIDefaultParams, APIAuth} from '@utils/constants';
import {HttpRequest} from './httpRequest';
import {
  MoviesRequestInterface,
  MovieDetailsInterface,
  MovieCastingInterface,
} from 'interfaces';

/**
 * Action para obtener las últimas pleículas
 * @param page Número de paginación
 */
export const GetLatestMovies = async (
  page: number,
): Promise<MoviesRequestInterface> => {
  const url = `${APIBase}now_playing?${APIDefaultParams}&page=${page}`;
  const data = await HttpRequest<MoviesRequestInterface>(url);
  return data;
};

/**
 * Action para obtener las películas más votadas
 * @param page Número de paginación
 */
export const GetTopRatedMovies = async (
  page: number,
): Promise<MoviesRequestInterface> => {
  const url = `${APIBase}top_rated?${APIDefaultParams}&page=${page}`;
  const data = await HttpRequest<MoviesRequestInterface>(url);
  return data;
};

/**
 * Action para obtener el detalle de una película
 * @param movieId ID de la película
 */
export const GetMovieDetails = async (
  movieId: number,
): Promise<MovieDetailsInterface> => {
  const url = `${APIBase}${movieId}?${APIDefaultParams}`;
  const data = await HttpRequest<MovieDetailsInterface>(url);
  return data;
};

/**
 * Action para obtener el casting de una película
 * @param movieId ID de la película
 */
export const GetMovieCasting = async (
  movieId: number,
): Promise<MovieCastingInterface> => {
  const url = `${APIBase}${movieId}/credits?api_key=${APIAuth}`;
  const data = await HttpRequest<MovieCastingInterface>(url);
  return data;
};
