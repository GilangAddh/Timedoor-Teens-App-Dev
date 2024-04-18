import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChallengeScreen from './src/screens/firstScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <ChallengeScreen />
    </SafeAreaProvider>
  );
};

export default App;
