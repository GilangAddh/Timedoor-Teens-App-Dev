import React from 'react';
import {View, Text, Button} from 'react-native';
const FirstScreen = () => {
  const openAlert = () => {
    alert('Hey, You click the button!');
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 16, color: 'blue'}}>
        Hello <Text style={{color: 'red'}}>World!</Text>
      </Text>
      <Button title="This is button" onPress={openAlert} />
    </View>
  );
};
const ChallengeScreen = () => {
  const newAlert = () => {
    alert('Hey, You click the button!');
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
      }}>
      <Text style={{color: 'green', margin: 12, fontSize: 18}}>
        Let's Learn React Native Framework
      </Text>
      <Text style={{margin: 8}}>My name is Gilang</Text>
      <Text style={{margin: 8}}>
        Now I'm learning about{' '}
        <Text style={{color: 'blue'}}>React Native Components</Text> to build
        the user interface for android apps
      </Text>
      <Text style={{margin: 8, color: 'red'}}>I Love Coding</Text>
      <Button title="Click Me" onPress={newAlert} />
    </View>
  );
};

export default ChallengeScreen;
