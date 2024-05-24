import React from 'react';
import {View, Text, Image} from 'react-native';
import {Icon} from 'react-native-elements';

export const Feed = props => {
  const {profile, username, post} = props;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
            source={profile}
          />
          <Text
            style={{
              marginLeft: 8,
              fontFamily: 'Poppins-Bold',
            }}>
            {username}
          </Text>
        </View>
        <Icon name="dots-vertical" type="material-community" />
      </View>
      <Image source={post} style={{width: '100%', height: 300}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{margin: 8}}>
            <Icon name="heart-o" type="font-awesome" size={26} />
          </View>
          <View style={{margin: 8}}>
            <Icon name="comment-o" type="font-awesome" size={26} />
          </View>
          <View style={{margin: 8}}>
            <Icon name="paper-plane-outline" type="ionicon" size={26} />
          </View>
        </View>
        <View style={{margin: 8}}>
          <Icon name="bookmark-o" type="font-awesome" size={26} />
        </View>
      </View>
    </View>
  );
};
export const Story = props => {
  const {username, profile} = props;
  return (
    <View style={{marginRight: 8, alignItems: 'center'}}>
      <Image
        style={{width: 80, height: 80, borderRadius: 100}}
        source={profile}
      />
      <Text style={{fontFamily: 'Poppins-Light'}}>{username}</Text>
    </View>
  );
};
