import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {Feed, Story} from '../components/InstagramComponents';
const InstagramHomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 40,
            marginLeft: 16,
            fontFamily: 'StyleScript-Regular',
          }}>
          Instagram
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 8,
          }}>
          <View style={{margin: 8}}>
            <Icon name="plus-square-o" type="font-awesome" size={26} />
          </View>
          <View style={{margin: 8}}>
            <Icon name="heart-o" type="font-awesome" size={26} />
          </View>
          <View style={{margin: 8}}>
            <Icon name="paper-plane-outline" type="ionicon" size={26} />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{flexDirection: 'row', margin: 8}}>
          <ScrollView horizontal>
            <Story
              profile={require('../../assets/images/profilePicture2.png')}
              username="giilangadhii"></Story>
            <Story
              profile={require('../../assets/images/profilePicture1.png')}
              username="sashaaa"></Story>
            <Story
              profile={require('../../assets/images/profilePicture3.png')}
              username="efffine"></Story>
            <Story
              profile={require('../../assets/images/profilePicture4.png')}
              username="budibudiman"></Story>
            <Story
              profile={require('../../assets/images/profilePicture5.png')}
              username="andimandi"></Story>
          </ScrollView>
        </View>
        <Feed
          profile={require('../../assets/images/profilePicture2.png')}
          username="giilangadhii"
          post={{uri: 'https://wallpaperaccess.com/full/201215.jpg'}}></Feed>
        <Feed
          profile={require('../../assets/images/profilePicture1.png')}
          username="sashaaa"
          post={{uri: 'https://wallpaperaccess.com/full/496881.jpg'}}></Feed>
        <Feed
          profile={require('../../assets/images/profilePicture3.png')}
          username="effffine"
          post={{uri: 'https://wallpaperaccess.com/full/496881.jpg'}}></Feed>
        <Feed
          profile={require('../../assets/images/profilePicture4.png')}
          username="bumibudiman"
          post={{
            uri: 'https://images5.alphacoders.com/316/316297.jpg',
          }}></Feed>
        <Feed
          profile={require('../../assets/images/profilePicture5.png')}
          username="andimandi"
          post={{uri: 'https://wallpaperaccess.com/full/1403923.jpg'}}></Feed>
      </ScrollView>
    </View>
  );
};
export default InstagramHomeScreen;
