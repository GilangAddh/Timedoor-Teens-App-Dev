import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NoteListScreen from '../screens/NoteListScreen';
import TryCodeScreen from '../screens/TryCodeScreen';
import AddNoteScreen from '../screens/AddNoteScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NoteList">
        <Stack.Screen
          name="NoteList"
          component={NoteListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddNote"
          component={AddNoteScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
