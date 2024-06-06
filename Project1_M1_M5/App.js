import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import FourthScreen from './src/screens/fourthScreen';
import InstagramHomeScreen from './src/screens/instagramHomeScreen';
// import ChallengeScreen from './src/screens/secondScreen';
// import ChallengeScreen from './src/screens/firstScreen';

// import ChallengeScreen from './src/screens/thirdScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <InstagramHomeScreen />
    </SafeAreaProvider>
  );
};

export default App;
