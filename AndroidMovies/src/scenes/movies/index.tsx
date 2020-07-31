import * as React from 'react';
import {View} from 'react-native';
import {MoviesProps} from 'navigation/movies-navigator-types';
import TitleAndSearch from '@components/organisms/titleAndSearch';

//navigation.navigate('MoviesDetails')

const Movies: React.FC<MoviesProps> = ({navigation}: MoviesProps) => {
  return (
    <View>
      <TitleAndSearch />
    </View>
  );
};

export default Movies;
