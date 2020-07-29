import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  useEffect(() => {
    SplashScreen && SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#032541" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
});

export default App;
