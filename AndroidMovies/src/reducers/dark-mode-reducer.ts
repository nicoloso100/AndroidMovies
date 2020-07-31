import {SET_DARKMODE_ENABLED, SET_DARKMODE_DISABLED} from '@utils/constants';

export interface DarkModeReducer {
  enabled: boolean;
}

const initialState: DarkModeReducer = {
  enabled: false,
};

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
