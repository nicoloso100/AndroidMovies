import {SET_DARKMODE_ENABLED} from '@utils/constants';

export interface DarkModeReducer {
  enabled: boolean;
}

const initialState: DarkModeReducer = {
  enabled: false,
};

const DarkModeReducer = (
  state: DarkModeReducer = initialState,
  action: any,
) => {
  switch (action.type) {
    case SET_DARKMODE_ENABLED:
      return {
        ...state,
        enabled: action.data,
      };
    default:
      return state;
  }
};

export default DarkModeReducer;
