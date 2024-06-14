import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {userData} from '../../data/TryCodeData';
const TryCodeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        An array of objects lets you store multiple values in a single variable.
        It stores a fixed-size sequential collection of elements of the same
        type. An array is used to store a collection of data, but it is often
        more useful to think of an array as a collection of variables of the
        same type.
      </Text>
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
