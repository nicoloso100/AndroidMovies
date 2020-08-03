/**
 * Interfaz de una película
 */
export interface MoviesInterface {
  /**
   * Id de la película
   */
  id: number;
  /**
   * Nombre de la película
   */
  title: string;
  /**
   * Putuación de la película del 1 al 10
   */
  vote_average: number;
  /**
   * Ruta de la imágen principal de la película
   */
  poster_path: string;
}

/**
 * Interfaz de respuesta para los listados de películas
 */
export interface MoviesRequestInterface {
  /**
   * Número de página consultada
   */
  page: number;
  /**
   * Número de registros totales
   */
  total_results: number;
  /**
   * Número de páginas totales
   */
  total_pages: number;
  /**
   * Lista de películas
   */
  results: MoviesInterface[];
}

/**
 * Interfaz para los estidios vinculados con la película
 */
export interface MovieProductionCompaniesInterface {
  /**
   * Nombre del estudio
   */
  name: string;
}

/**
 * Interfaz para los géneros de las películas
 */
export interface MovieGenresInterface {
  /**
   * ID del género
   */
  id: number;
  /**
   * Nombre del género
   */
  name: string;
}

/**
 * Interfaz para obtener el detalle completo de una película
 */
export interface MovieDetailsInterface extends MoviesInterface {
  /**
   * Ruta para la imágen del banner de la película
   */
  backdrop_path: string;
  /**
   * Descripción de la película
   */
  overview: string;
  /**
   * Estudios vinculados con la película
   */
  production_companies: MovieProductionCompaniesInterface[];
  /**
   * Fecha de lanzamiento de la película
   */
  release_date: Date;
  /**
   * Lista de géneros correspondientes a la película
   */
  genres: MovieGenresInterface[];
  /**
   * URL del sitio web de la película
   */
  homepage: string;
}

/**
 * Interfaz para el casting de una película
 */
export interface MovieCastInterface {
  /**
   * ID de la persona
   */
  cast_id: number;
  /**
   * Nombre de la persona
   */
  name: string;
  /**
   * Ruta para la foto de perfil de la persona
   */
  profile_path: string;
}

/**
 * Interfaz para la lista de casting de una película
 */
export interface MovieCastingInterface {
  cast: MovieCastInterface[];
}
