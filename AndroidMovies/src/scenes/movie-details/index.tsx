import * as React from 'react';
import {MoviesDetailsProps} from 'navigation/movies-navigator-types';
import {useSelector} from 'react-redux';
import {RootState} from '@reducers/index';
import {MovieDetailsContainer} from './styles';
import MyImage from '@components/atoms/image';
import {APIImages} from '@utils/constants';
import MovieDetailsSection from '@components/organisms/movieDetailsSection';

const MovieDetails: React.FC<MoviesDetailsProps> = () => {
  const selector = useSelector((state: RootState) => state.movieDetails);

  return (
    <MovieDetailsContainer>
      {selector.movie !== null && selector.casting !== null && (
        <React.Fragment>
          <MyImage
            URL={`${APIImages}${selector.movie.backdrop_path}`}
            height="270px"
            radius="0px"
          />
          <MovieDetailsSection
            movie={selector.movie}
            casting={selector.casting}
          />
        </React.Fragment>
      )}
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
