import * as React from 'react';
import {
  MovieDetailsInterface,
  MovieCastingInterface,
  MovieCastInterface,
} from 'interfaces';
import {
  MovieDetailsSectionContainer,
  MovieDescriptionContainer,
  MovieCastingContainer,
  MovieFooterContainer,
} from './styles';
import MovieTitleAndRating from '@components/molecules/movieTitleAndRating';
import MyText from '@components/atoms/text';
import {FlatList} from 'react-native';
import CastingCard from '@components/molecules/castingCard';
import {APIImages} from '@utils/constants';
import MovieFooterInfo from '@components/molecules/movieFooterInfo';

interface MovieDetailsSectionProps {
  movie: MovieDetailsInterface;
  casting: MovieCastingInterface;
}

const MovieDetailsSection: React.FC<MovieDetailsSectionProps> = ({
  movie,
  casting,
}) => {
  const renderItem = ({item}: {item: MovieCastInterface}) => {
    return (
      <CastingCard
        name={item.name}
        imageURL={`${APIImages}${item.profile_path}`}
      />
    );
  };

  const getGenres = React.useMemo(() => {
    let genres: string[] = [];
    genres = movie.genres.map((genre) => genre.name);
    return genres;
  }, [movie.genres]);

  const getStudios = React.useMemo(() => {
    let studios: string[] = [];
    studios = movie.production_companies.map((studio) => studio.name);
    return studios;
  }, [movie.production_companies]);

  return (
    <MovieDetailsSectionContainer>
      <MovieTitleAndRating
        title={movie.title}
        netflixURL={movie.homepage}
        rating={movie.vote_average}
      />
      <MovieDescriptionContainer>
        <MyText text={movie.overview} />
      </MovieDescriptionContainer>
      <MovieCastingContainer>
        <FlatList
          horizontal
          data={casting.cast}
          renderItem={renderItem}
          keyExtractor={(casting) => casting.cast_id.toString()}
        />
      </MovieCastingContainer>
      <MovieFooterContainer>
        <MovieFooterInfo
          studios={getStudios}
          genre={getGenres}
          release={movie.release_date}
        />
      </MovieFooterContainer>
    </MovieDetailsSectionContainer>
  );
};

export default MovieDetailsSection;
