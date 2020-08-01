import * as React from 'react';
import {MoviesProps} from 'navigation/movies-navigator-types';
import TitleAndSearch from '@components/organisms/titleAndSearch';
import MoviesList from '@components/organisms/moviesList';
import {ScreenContainer} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '@reducers/index';

const Movies: React.FC<MoviesProps> = () => {
  const selector = useSelector((state: RootState) => state.darkMode);

  return (
    <ScreenContainer darkTheme={selector.enabled}>
      <TitleAndSearch />
      <MoviesList />
    </ScreenContainer>
  );
};

export default Movies;
