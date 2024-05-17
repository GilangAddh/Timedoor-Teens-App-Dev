import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChallengeScreen from './src/screens/secondScreen';
// import ChallengeScreen from './src/screens/firstScreen';
import AddImage from './src/screens/thirdScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <AddImage />
    </SafeAreaProvider>
  );
};

export default App;
