import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

/**
 * Interfaz principal de la navegación secundaria
 */
export type MoviesParamList = {
  Movies: undefined;
  MoviesDetails: undefined;
};

/**
 * Interfaz para la ruta de Movies
 */
type MoviesRouteProp = RouteProp<MoviesParamList, 'Movies'>;
/**
 * Interfaz para la ruta de MoviesDetails
 */
type MoviesDetailsRouteProp = RouteProp<MoviesParamList, 'MoviesDetails'>;

/**
 * Interfaz para la navegación de Movies
 */
export type MoviesNavigationProp = StackNavigationProp<
  MoviesParamList,
  'Movies'
>;
/**
 * Interfaz para la navegación de MoviesDetails
 */
export type MoviesDetailsNavigationProp = StackNavigationProp<
  MoviesParamList,
  'MoviesDetails'
>;

/**
 * Interfaz para los props de la navegación de Movies
 */
export type MoviesProps = {
  route: MoviesRouteProp;
  navigation: MoviesNavigationProp;
};

/**
 * Interfaz para los props de la navegación de MoviesDetails
 */
export type MoviesDetailsProps = {
  route: MoviesDetailsRouteProp;
  navigation: MoviesDetailsNavigationProp;
};
