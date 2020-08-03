import Config from 'react-native-config';

/**
 * Constantes para la dirección base del API
 */
export const APIBase = 'https://api.themoviedb.org/3/movie/';
/**
 * Constante para la dirección base para las imágenes traídas del API
 */
export const APIImages = 'https://image.tmdb.org/t/p/w500/';
/**
 * Token trapido de la variable de entorno para autenticaicón en los requests del API
 */
export const APIAuth = Config.API_AUTH;
/**
 * Idioma por defecto para las respuestas y el conteido del API
 */
export const APIDefaultLanguage = 'es-CO';
/**
 * Parámetros por defecto que usan la mayoría de requests al API
 */
export const APIDefaultParams = `api_key=${APIAuth}&language=${APIDefaultLanguage}`;
/**
 * Constantes para los Reducers de Redux
 */
export const SET_DARKMODE_ENABLED = 'SET_DARKMODE_ENABLED';
export const SET_DARKMODE_DISABLED = 'SET_DARKMODE_DISABLED';
export const SET_MOVIE_DETAILS = 'SET_MOVIE_DETAILS';
export const SET_MOVIE_CASTING = 'SET_MOVIE_CASTING';
