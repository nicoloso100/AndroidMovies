import * as React from 'react';
import {MoviesListSectionContainer} from './styles';
import MoviesListHeader from '@components/molecules/moviesListHeader';
import {FlatList, TouchableOpacity} from 'react-native';
import MovieCard from '@components/molecules/movieCard';
import {APIImages} from '@utils/constants';
import {MoviesInterface, MoviesRequestInterface} from 'interfaces';
import {GetTopRatedMovies} from 'actions/api-calls';

interface TopRatedMoviesProps {
  /**
   * Evento al seleccionar una película
   */
  onSelectMovie: (movieId: number) => void;
}

/**
 * Lista de películas más votadas
 */
const TopRatedMovies: React.FC<TopRatedMoviesProps> = ({onSelectMovie}) => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [maxPage, setMaxPage] = React.useState<number>(0);
  const [moviesList, setMoviesList] = React.useState<MoviesInterface[]>([]);

  /**
   * Método para obtener las películas más votadas según su paginación
   * @param newPage Número de paginación
   */
  const fetchData = (newPage: number) => {
    GetTopRatedMovies(newPage).then((response: MoviesRequestInterface) => {
      setMoviesList([...moviesList, ...response.results]);
      setMaxPage(response.total_pages);
    });
  };

  React.useEffect(() => {
    fetchData(1);
  }, []);

  const renderItem = ({item}: {item: MoviesInterface}) => (
    <TouchableOpacity onPress={() => onSelectMovie(item.id)}>
      <MovieCard
        title={item.title}
        imageURL={`${APIImages}${item.poster_path}`}
        rating={item.vote_average}
      />
    </TouchableOpacity>
  );

  const handleLoadMore = () => {
    let nextPage = currentPage + 1;
    if (nextPage <= maxPage) {
      setCurrentPage(nextPage);
      fetchData(nextPage);
    }
  };

  return (
    <MoviesListSectionContainer marginBottom="70px">
      <MoviesListHeader text="MÁS VOTADAS" />
      <FlatList
        horizontal
        data={moviesList}
        renderItem={renderItem}
        keyExtractor={(movie) => movie.id.toString()}
        onEndReached={() => handleLoadMore()}
        onEndReachedThreshold={5}
        initialNumToRender={20}
        showsHorizontalScrollIndicator={false}
      />
    </MoviesListSectionContainer>
  );
};

export default TopRatedMovies;
