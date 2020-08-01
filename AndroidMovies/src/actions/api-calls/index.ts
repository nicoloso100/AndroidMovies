import {APIBase, APIDefaultParams, APIAuth} from '@utils/constants';
import {HttpRequest} from './httpRequest';
import {
  MoviesRequestInterface,
  MovieDetailsInterface,
  MovieCastingInterface,
} from 'interfaces';

export const GetLatestMovies = async (
  page: number,
): Promise<MoviesRequestInterface> => {
  const url = `${APIBase}now_playing?${APIDefaultParams}&page=${page}`;
  const data = await HttpRequest<MoviesRequestInterface>(url);
  return data;
};

export const GetTopRatedMovies = async (
  page: number,
): Promise<MoviesRequestInterface> => {
  const url = `${APIBase}top_rated?${APIDefaultParams}&page=${page}`;
  const data = await HttpRequest<MoviesRequestInterface>(url);
  return data;
};

export const GetMovieDetails = async (
  movieId: number,
): Promise<MovieDetailsInterface> => {
  const url = `${APIBase}${movieId}?${APIDefaultParams}`;
  const data = await HttpRequest<MovieDetailsInterface>(url);
  return data;
};

export const GetMovieCasting = async (
  movieId: number,
): Promise<MovieCastingInterface> => {
  const url = `${APIBase}${movieId}/credits?api_key=${APIAuth}`;
  const data = await HttpRequest<MovieCastingInterface>(url);
  return data;
};
