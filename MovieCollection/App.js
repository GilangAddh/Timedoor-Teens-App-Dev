import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TryCodeScreen from './src/screens/TryCodeScreen';
import HomeScreen from './src/screens/HomeScreen';
import MainNavigator from './src/navigator/MainNavigator';
const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator />
    </SafeAreaProvider>
  );
};
export default App;
