import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
const SecondScreen = () => {
  const openAlert = game => {
    if (game === 'mobileLegends') {
      alert('You chose Mobile Legends!');
    } else if (game === 'PUBG') {
      alert('You chose PUBG!');
    }
  };
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
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 8,
            margin: 8,
            borderRadius: 50,
            borderWidth: 2,
          }}
          onPress={() => openAlert('mobileLegends')}>
          <Text style={{color: 'lightcoral'}}>Mobile Legends Button</Text>
        </TouchableOpacity>
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
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            padding: 8,
            margin: 8,
            borderRadius: 50,
            borderWidth: 2,
          }}
          onPress={() => openAlert('PUBG')}>
          <Text style={{color: 'lightcoral'}}>PUBG Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ChallengeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            color: '#6DC5D1',
            fontWeight: 'bold',
            fontSize: 18,
            textDecorationLine: 'underline',
          }}>
          iOS
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#FDE49E',
          margin: 8,
          borderWidth: 4,
          borderColor: 'purple',
          borderRadius: 8,
          borderStyle: 'dashed',
          padding: 12,
          margin: 12,
        }}>
        <Text>
          iOS (formerly iPhone OS) is a mobile operating system created and
          developed by{' '}
          <Text style={{color: 'darkblue', fontStyle: 'italic'}}>
            Apple Inc
          </Text>
          . exclusively for its hardware. It is the operating system that powers
          many of the company’s mobile devices, including the iPhone and iPod
          Touch.
        </Text>
      </View>
      <View style={{margin: 12}}>
        <Text
          style={{
            color: '#ACE1AF',
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            fontSize: 18,
          }}>
          VS.
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#A91D3A',
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            fontSize: 18,
          }}>
          Android
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#FFAF61',
          margin: 8,
          borderWidth: 4,
          borderColor: 'purple',
          borderRadius: 8,
          borderStyle: 'dashed',
          padding: 12,
          margin: 12,
        }}>
        <Text>
          Android is a mobile operating system based on a modified version of
          the Linux kernel and other open source software, designed primarily
          for touchscreen mobile devices such as smartphones and tablets.
          Android is developed by a consortium of developers known as the{' '}
          <Text style={{color: 'magenta', fontStyle: 'italic'}}>
            Open Handset Alliance
          </Text>{' '}
          and commercially sponsored by{' '}
          <Text style={{color: 'magenta', fontStyle: 'italic'}}>Google.</Text>
        </Text>
      </View>
    </View>
  );
};
export default ChallengeScreen;
