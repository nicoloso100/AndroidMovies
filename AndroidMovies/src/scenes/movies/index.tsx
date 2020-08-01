import * as React from 'react';
import {MoviesProps} from 'navigation/movies-navigator-types';
import TitleAndSearch from '@components/organisms/titleAndSearch';
import MoviesList from '@components/organisms/moviesList';
import {ScreenContainer} from './styles';

const Movies: React.FC<MoviesProps> = () => {
  return (
    <ScreenContainer>
      <TitleAndSearch />
      <MoviesList />
    </ScreenContainer>
  );
};

export default Movies;
