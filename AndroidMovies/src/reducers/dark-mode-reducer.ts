import {SET_DARKMODE_ENABLED, SET_DARKMODE_DISABLED} from '@utils/constants';

/**
 * Interfaz para el reducer del darkmode
 */
export interface DarkModeReducer {
  enabled: boolean;
}

/**
 * Estado inicial del reducer del darkmode
 */
const initialState: DarkModeReducer = {
  enabled: false,
};

/**
 * Reducer para el DarkMode
 */
const DarkModeReducer = (
  state: DarkModeReducer = initialState,
  action: any,
): DarkModeReducer => {
  switch (action.type) {
    case SET_DARKMODE_ENABLED:
      return {
        ...state,
        enabled: true,
      };
    case SET_DARKMODE_DISABLED:
      return {
        ...state,
        enabled: false,
      };
    default:
      return state;
  }
};

export default DarkModeReducer;
