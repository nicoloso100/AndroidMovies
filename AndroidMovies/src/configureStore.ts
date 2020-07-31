import {createStore, applyMiddleware} from 'redux';
import Reducers from '@reducers/index';
import thunk from 'redux-thunk';

const ConfigureStore = () => {
  let store = createStore(Reducers, applyMiddleware(thunk));
  return store;
};

export default ConfigureStore;
