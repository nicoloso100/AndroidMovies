import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type MoviesParamList = {
  Movies: undefined;
  MoviesDetails: undefined;
};

type MoviesRouteProp = RouteProp<MoviesParamList, 'Movies'>;
type MoviesDetailsRouteProp = RouteProp<MoviesParamList, 'Movies'>;

type MoviesNavigationProp = StackNavigationProp<MoviesParamList, 'Movies'>;
type MoviesDetailsNavigationProp = StackNavigationProp<
  MoviesParamList,
  'MoviesDetails'
>;

export type MoviesProps = {
  route: MoviesRouteProp;
  navigation: MoviesNavigationProp;
};
export type MoviesDetailsProps = {
  route: MoviesDetailsRouteProp;
  navigation: MoviesDetailsNavigationProp;
};
