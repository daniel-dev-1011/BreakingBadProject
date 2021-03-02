import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import screens from './screens';
import SplashScreen from 'react-native-splash-screen';
import { HomeScreen, DetailCharacter, Comments } from '../features';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={screens.home.name} component={HomeScreen} />
      <Stack.Screen name={screens.detail_character.name} component={DetailCharacter} />
      <Stack.Screen name={screens.comments.name} component={Comments} />
    </Stack.Navigator>
  );
};

const app = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 0);
  }, []);

  return (
    <NavigationContainer>
      {HomeStackNavigation()}
    </NavigationContainer>
  );
};

export default app;
