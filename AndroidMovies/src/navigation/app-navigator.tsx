import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MoviesNavigator from './movies-navigator';
import {RootStackParamList} from './app-navigator-types';
import {Linking} from 'react-native';
import DarkModeSwitch from '@components/molecules/darkModeSwitch';
import DrawerLogo from '@components/atoms/logoImage';

const Drawer = createDrawerNavigator<RootStackParamList>();

const CustomDrawerContent = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerLogo />
      <DrawerItemList {...props} />
      <DrawerItem
        label="GitHub"
        onPress={() =>
          Linking.openURL('https://github.com/nicoloso100/AndroidMovies')
        }
      />
      <DrawerItem
        label="Linkedin"
        onPress={() =>
          Linking.openURL(
            'https://www.linkedin.com/in/nicol%C3%A1s-angarita-117b72178/',
          )
        }
      />
      <DarkModeSwitch />
    </DrawerContentScrollView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={CustomDrawerContent}>
        <Drawer.Screen name="Movies" component={MoviesNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
