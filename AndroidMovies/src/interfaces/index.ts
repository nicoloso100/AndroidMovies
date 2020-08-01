export interface MoviesInterface {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
}

export interface MoviesRequestInterface {
  page: number;
  total_results: number;
  total_pages: number;
  results: MoviesInterface[];
}

export interface MovieProductionCompaniesInterface {
  name: string;
}

export interface MovieGenresInterface {
  id: number;
  name: string;
}

export interface MovieDetailsInterface extends MoviesInterface {
  backdrop_path: string;
  overview: string;
  production_companies: MovieProductionCompaniesInterface;
  release_date: Date;
  genres: MovieGenresInterface[];
}

export interface MovieCastInterface {
  cast_id: number;
  name: string;
  profile_path: string;
}

export interface MovieCastingInterface {
  cast: MovieCastInterface[];
}
