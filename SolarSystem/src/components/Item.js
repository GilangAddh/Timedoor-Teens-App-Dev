import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export const Item = props => {
  const {url, title, desc} = props;
  const myAlert = planet => {
    alert(`You click ${planet}!`);
  };
  return (
    <TouchableOpacity
      onPress={() => myAlert(title)}
      style={{
        flex: 1,
        backgroundColor: 'wheat',
        padding: 16,
        margin: 16,
        borderRadius: 20,
        borderColor: 'green',
        borderWidth: 1,
        flexDirection: 'row',
      }}>
      <Image style={{width: 100, height: 100}} source={url} />
      <View
        style={{
          flex: 1,
          marginLeft: 8,
          marginRight: 8,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            justifyContent: 'center',
          }}>
          {title}
        </Text>
        <Text>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};
