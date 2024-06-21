import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {userData} from '../../data/TryCodeData';
const TryCodeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentContainerStyle}
        data={userData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.containerAnItem}>
              <Image source={{uri: item.imageLink}} style={styles.imageItem} />
              <Text>{item.name}</Text>
              <Text>{item.gender}</Text>
              <Text>{item.age}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAnItem: {
    margin: 8,
    backgroundColor: 'lavender',
    borderWidth: 1,
  },
  contentContainerStyle: {
    padding: 16,
  },
  imageItem: {
    width: 100,
    height: 100,
  },
});
export default TryCodeScreen;
