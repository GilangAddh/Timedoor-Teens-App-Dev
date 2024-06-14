import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TryCodeScreen from './src/screens/TryCodeScreen';
import HomeScreen from './src/screens/HomeScreen';
const App = () => {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
};
export default App;
