import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from 'navigation/app-navigator';
import configureStore from 'configureStore';

let store = configureStore();

const App = () => {
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
