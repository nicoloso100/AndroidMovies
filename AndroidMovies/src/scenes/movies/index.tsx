import * as React from 'react';
import {MoviesProps} from 'navigation/movies-navigator-types';
import MainTitle from '@components/organisms/titleAndSearch';
import MoviesList from '@components/organisms/moviesList';
import {ScreenContainer} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '@reducers/index';

/**
 * Escena principal para mostar las listas de películas
 */
const Movies: React.FC<MoviesProps> = () => {
  const selector = useSelector((state: RootState) => state.darkMode);

  return (
    <ScreenContainer darkTheme={selector.enabled}>
      <MainTitle />
      <MoviesList />
    </ScreenContainer>
  );
};

export default Movies;
