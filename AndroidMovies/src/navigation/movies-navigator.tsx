import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Movies from '@scenes/movies';
import MovieDetails from '@scenes/movie-details';
import {MoviesParamList} from './movies-navigator-types';

const Stack = createStackNavigator<MoviesParamList>();

/**
 * Navegación secundaria de la aplicación
 */
const MoviesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="MoviesDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default MoviesNavigator;
