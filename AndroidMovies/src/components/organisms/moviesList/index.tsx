import * as React from 'react';
import {MoviesListContainer} from './styles';
import LatestMovies from './latestMovies';
import TopRatedMovies from './topRatedMovies';
import {useNavigation} from '@react-navigation/native';
import {MoviesDetailsNavigationProp} from 'navigation/movies-navigator-types';
import {MovieDetailsInterface, MovieCastingInterface} from 'interfaces';
import {useDispatch} from 'react-redux';
import {updateMovieDetails, updateMovieCasting} from 'actions/redux-actions';
import {GetMovieDetails, GetMovieCasting} from 'actions/api-calls';

const MoviesList = () => {
  const navigation = useNavigation<MoviesDetailsNavigationProp>();
  const dispatch = useDispatch();

  const onSelectMovie = (movieId: number) => {
    GetMovieDetails(movieId).then((movie: MovieDetailsInterface) => {
      dispatch(updateMovieDetails(movie));
      GetMovieCasting(movieId).then((casting: MovieCastingInterface) => {
        dispatch(updateMovieCasting(casting));
        navigation.navigate('MoviesDetails');
      });
    });
  };

  return (
    <MoviesListContainer>
      <LatestMovies onSelectMovie={onSelectMovie} />
      <TopRatedMovies onSelectMovie={onSelectMovie} />
    </MoviesListContainer>
  );
};

export default MoviesList;
