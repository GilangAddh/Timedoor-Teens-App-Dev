import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ContactListScreen from '../screens/ContactListScreen';
import AddContactScreeen from '../screens/AddContactScreeen';
const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen
          name="ContactList"
          component={ContactListScreen}
          options={{
            title: 'Contact List',
            headerStyle: {
              backgroundColor: '#B7F1D4',
            },
            headerTitleStyle: {
              color: 'black',
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContactScreeen}
          options={{
            title: 'Add Contact',
            headerStyle: {
              backgroundColor: '#B7F1D4',
            },
            headerTitleStyle: {
              color: 'black',
              fontSize: 20,
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
