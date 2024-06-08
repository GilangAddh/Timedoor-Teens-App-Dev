import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Item} from '../components/Item';
const SolarSystemScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 16, alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'serif',
            textDecorationLine: 'underline',
          }}>
          SOLAR SYSTEM
        </Text>
      </View>
      <ScrollView>
        <Item
          url={require('../../assets/images/mercury.png')}
          title="Mercury"
          desc="Mercury is the fastest planet, zipping around the sun every 88 earth days"
        />
        <Item
          url={require('../../assets/images/venus.png')}
          title="Venus"
          desc="Venus spins slowly in the opposite direction from most planets"
        />
        <Item
          url={require('../../assets/images/earth.png')}
          title="Earth"
          desc="Earth is the only place we know of so far that’s inhabited by living things"
        />
        <Item
          url={require('../../assets/images/mars.png')}
          title="Mars"
          desc="Mars is a dusty, cold, desert world with a very thin atmosphere"
        />
        <Item
          url={require('../../assets/images/jupiter.png')}
          title="Jupiter"
          desc="Jupiter is more than twice as massive than the other planets of our solar system combined"
        />
        <Item
          url={require('../../assets/images/saturn.png')}
          title="Saturn"
          desc="Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system"
        />
        <Item
          url={require('../../assets/images/uranus.png')}
          title="Uranus"
          desc="Uranus rotates at a nearly 90-degree angle from the plane of its orbit"
        />
        <Item
          url={require('../../assets/images/neptune.png')}
          title="Neptune"
          desc="Neptune is dark, cold, and whipped by supersonic winds"
        />
      </ScrollView>
    </View>
  );
};
export default SolarSystemScreen;
