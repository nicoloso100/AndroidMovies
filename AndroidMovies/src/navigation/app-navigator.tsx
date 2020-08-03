import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import MoviesNavigator from './movies-navigator';
import {RootStackParamList} from './app-navigator-types';
import {Linking} from 'react-native';
import DarkModeSwitch from '@components/molecules/darkModeSwitch';
import DrawerLogo from '@components/atoms/logoImage';
import {useSelector} from 'react-redux';
import {RootState} from '@reducers/index';

const Drawer = createDrawerNavigator<RootStackParamList>();

/**
 * Componente de Drawer personalizado
 */
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

/**
 * Navegación principal de tipo Drawer
 */
export default function App() {
  const selector = useSelector((state: RootState) => state.darkMode);

  return (
    <NavigationContainer theme={selector.enabled ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator drawerContent={CustomDrawerContent}>
        <Drawer.Screen name="Movies" component={MoviesNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
