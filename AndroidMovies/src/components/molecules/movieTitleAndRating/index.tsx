import * as React from 'react';
import {Linking} from 'react-native';
import {WatchAndRatingContainer, MovieTitleAndRatingContainer} from './styles';
import Title from '@components/atoms/title';
import RatingStarts from '../ratingStars';
import MyButton from '@components/atoms/button';

interface MovieTitleAndRatingProps {
  title: string;
  netflixURL: string;
  rating: number;
}

const MovieTitleAndRating: React.FC<MovieTitleAndRatingProps> = ({
  title,
  netflixURL,
  rating,
}) => {
  return (
    <MovieTitleAndRatingContainer>
      <Title text={title} />
      <WatchAndRatingContainer>
        <MyButton
          text="VER PÁGINA WEB"
          onPress={() => Linking.openURL(netflixURL)}
        />
        <RatingStarts rating={rating} />
      </WatchAndRatingContainer>
    </MovieTitleAndRatingContainer>
  );
};

export default MovieTitleAndRating;
