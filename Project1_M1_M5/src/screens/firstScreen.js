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

const SecondScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lavender',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'skyblue',
          margin: 8,
          borderWidth: 4,
          borderColor: 'purple',
          borderRadius: 8,
          borderStyle: 'dashed',
          padding: 12,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black',
          }}>
          Mobile Legends
        </Text>
        <Text style={{fontSize: 16}}>
          <Text style={{color: 'purple'}}>Mobile Legends</Text> is multiplayer
          online battle arena (MOBA) game. Two opposing teams fight to reach and
          destroy the enemy's base while defending their own base for control of
          a path
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'cornflowerblue',
          margin: 8,
          borderWidth: 4,
          borderColor: 'purple',
          borderRadius: 8,
          borderStyle: 'dotted',
          padding: 12,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'black',
          }}>
          PUBG
        </Text>
        <Text style={{fontSize: 16}}>
          <Text style={{color: 'purple'}}>PlayerUnknown's Battlegrounds</Text>,
          better known as PUBG, is mutiplayer battle royale game in which player
          drop onto an island and fight to be the last one left standings
        </Text>
      </View>
    </View>
  );
};

export default ChallengeScreen;
