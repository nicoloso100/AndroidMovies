import * as React from 'react';
import {Linking} from 'react-native';
import {WatchAndRatingContainer, MovieTitleAndRatingContainer} from './styles';
import Title from '@components/atoms/title';
import RatingStarts from '../ratingStars';
import MyButton from '@components/atoms/button';

interface MovieTitleAndRatingProps {
  /**
   * Título de la película
   */
  title: string;
  /**
   * URL de la página web de la película
   */
  webPage: string;
  /**
   * Puntuación del 1 al 10 de la película
   */
  rating: number;
}

/**
 * Componente que muestra el título, redirije a la web y muestra la puntuación en estrellas de la película
 */

const MovieTitleAndRating: React.FC<MovieTitleAndRatingProps> = ({
  title,
  webPage,
  rating,
}) => {
  return (
    <MovieTitleAndRatingContainer>
      <Title text={title} />
      <WatchAndRatingContainer>
        <MyButton
          text="VER PÁGINA WEB"
          onPress={() => Linking.openURL(webPage)}
        />
        <RatingStarts rating={rating} />
      </WatchAndRatingContainer>
    </MovieTitleAndRatingContainer>
  );
};

export default MovieTitleAndRating;
