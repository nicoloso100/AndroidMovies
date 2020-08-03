import * as React from 'react';
import {MoviesListContainer, LoadingContainer} from './styles';
import LatestMovies from './latestMovies';
import TopRatedMovies from './topRatedMovies';
import {useNavigation} from '@react-navigation/native';
import {MoviesDetailsNavigationProp} from 'navigation/movies-navigator-types';
import {MovieDetailsInterface, MovieCastingInterface} from 'interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {updateMovieDetails, updateMovieCasting} from 'actions/redux-actions';
import {GetMovieDetails, GetMovieCasting} from 'actions/api-calls';
import {RootState} from '@reducers/index';
import {ActivityIndicator} from 'react-native';

/**
 * Componente que agrupa las listas de películas
 */
const MoviesList: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const navigation = useNavigation<MoviesDetailsNavigationProp>();
  const selector = useSelector((state: RootState) => state.darkMode);
  const dispatch = useDispatch();

  /**
   * Método que carga la información de la película seleccionada y abre la pantalla de detalle de película
   * @param movieId ID de la película seleccionada
   */
  const onSelectMovie = (movieId: number) => {
    setIsLoading(true);
    GetMovieDetails(movieId).then((movie: MovieDetailsInterface) => {
      dispatch(updateMovieDetails(movie));
      GetMovieCasting(movieId).then((casting: MovieCastingInterface) => {
        dispatch(updateMovieCasting(casting));
        navigation.navigate('MoviesDetails');
        setIsLoading(false);
      });
    });
  };

  return (
    <MoviesListContainer darkTheme={selector.enabled}>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator
            size="large"
            color={selector.enabled ? 'white' : '#0000ff'}
          />
        </LoadingContainer>
      ) : (
        <React.Fragment>
          <LatestMovies onSelectMovie={onSelectMovie} />
          <TopRatedMovies onSelectMovie={onSelectMovie} />
        </React.Fragment>
      )}
    </MoviesListContainer>
  );
};

export default MoviesList;
