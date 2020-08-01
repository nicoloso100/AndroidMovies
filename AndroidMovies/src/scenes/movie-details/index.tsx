import * as React from 'react';
import {View, Text} from 'react-native';
import {MoviesDetailsProps} from 'navigation/movies-navigator-types';
import {useSelector} from 'react-redux';
import {RootState} from '@reducers/index';

const MovieDetails: React.FC<MoviesDetailsProps> = () => {
  const selector = useSelector((state: RootState) => state.movieDetails);

  console.log(selector);
  return (
    <View>
      <Text>Holaaa</Text>
    </View>
  );
};

export default MovieDetails;
