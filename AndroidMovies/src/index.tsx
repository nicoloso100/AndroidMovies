import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from 'navigation/app-navigator';
import configureStore from 'configureStore';

let store = configureStore();

/**
 * Inicio de la aplicación
 */
const App = () => {
  /**
   * Desaparece el SplashScreen al iniciar la aplicación
   */
  useEffect(() => {
    SplashScreen && SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
