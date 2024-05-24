import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FourthScreen from './src/screens/fourthScreen';
// import ChallengeScreen from './src/screens/secondScreen';
// import ChallengeScreen from './src/screens/firstScreen';
// import ChallengeScreen from './src/screens/thirdScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <FourthScreen />
    </SafeAreaProvider>
  );
};

export default App;
