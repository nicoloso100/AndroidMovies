import * as React from 'react';
import {MovieCardContainer, MovieTitleRatingContainer} from './styles';
import MyImage from '@components/atoms/image';
import Label from '@components/atoms/label';
import RatingStarts from '../ratingStars';

interface MovieCardProps {
  /**
   * URL de la imágen de la película
   */
  imageURL: string;
  /**
   * Título de la película
   */
  title: string;
  /**
   * Puntuación de la película del 1 al 10
   */
  rating: number;
}

/**
 * Componente de tarjeta de una película
 */

const MovieCard: React.FC<MovieCardProps> = ({imageURL, title, rating}) => {
  return (
    <MovieCardContainer>
      <MyImage URL={imageURL} height="180px" />
      <MovieTitleRatingContainer>
        <Label text={title} />
        <RatingStarts rating={rating} />
      </MovieTitleRatingContainer>
    </MovieCardContainer>
  );
};

export default MovieCard;
