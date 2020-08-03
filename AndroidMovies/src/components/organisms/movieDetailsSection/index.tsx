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
  /**
   * Objeto con la informaión de la película
   */
  movie: MovieDetailsInterface;
  /**
   * Objeto con la informaión del casting de la película
   */
  casting: MovieCastingInterface;
}

/**
 * Componente que muestra todo el detalle de una película
 */
const MovieDetailsSection: React.FC<MovieDetailsSectionProps> = ({
  movie,
  casting,
}) => {
  /**
   * Función que retorna el componente de cada casting
   * @param item Información de cada casting
   */
  const renderItem = ({item}: {item: MovieCastInterface}) => {
    return (
      <CastingCard
        name={item.name}
        imageURL={`${APIImages}${item.profile_path}`}
      />
    );
  };

  /**
   * Método que obtiene la lista en sring de los génerons
   */
  const getGenres = React.useMemo(() => {
    let genres: string[] = [];
    genres = movie.genres.map((genre) => genre.name);
    return genres;
  }, [movie.genres]);

  /**
   * Método que obtiene la lista en sring de los estudios involucrados
   */
  const getStudios = React.useMemo(() => {
    let studios: string[] = [];
    studios = movie.production_companies.map((studio) => studio.name);
    return studios;
  }, [movie.production_companies]);

  return (
    <MovieDetailsSectionContainer>
      <MovieTitleAndRating
        title={movie.title}
        webPage={movie.homepage}
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
