import * as React from 'react';
import {MovieCardContainer, MovieTitleRatingContainer} from './styles';
import MyImage from '@components/atoms/image';
import Label from '@components/atoms/label';
import RatingStarts from '../ratingStars';

interface MovieCardProps {
  imageURL: string;
  title: string;
  rating: number;
}

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
