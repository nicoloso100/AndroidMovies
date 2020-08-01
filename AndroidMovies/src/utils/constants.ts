import Config from 'react-native-config';

export const APIBase = 'https://api.themoviedb.org/3/movie/';
export const APIImages = 'https://image.tmdb.org/t/p/w500/';
export const APIAuth = Config.API_AUTH;
export const APIDefaultLanguage = 'es-CO';
export const APIDefaultParams = `api_key=${APIAuth}&language=${APIDefaultLanguage}`;

export const SET_DARKMODE_ENABLED = 'SET_DARKMODE_ENABLED';
export const SET_DARKMODE_DISABLED = 'SET_DARKMODE_DISABLED';

export const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
export const SET_MOVIE_CASTING = 'SET_MOVIE_CASTING';
