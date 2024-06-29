import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailMovieScreen from '../screens/DetailMovieScreen';
import MostViewScreen from '../screens/MostViewScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailMovie" component={DetailMovieScreen} />
        <Stack.Screen name="MostView" component={MostViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
