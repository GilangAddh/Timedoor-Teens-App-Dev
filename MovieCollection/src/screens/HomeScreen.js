import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {userData} from '../../data/TryCodeData';
import {movieData} from '../../data/MovieData';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentContainerStyle}
        data={movieData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.containerAnItem}>
              <Image source={{uri: item.imageLink}} style={styles.imageItem} />
              <View style={styles.containerText}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.yearContainer}>
                  <Text>{item.year}</Text>
                </View>
                <Text>{item.rating}</Text>
              </View>
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
    borderWidth: 2,
    borderColor: '#96ceb4',
    borderRadius: 10,
    padding: 16,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainerStyle: {
    padding: 16,
  },
  imageItem: {
    width: 100,
    height: 150,
  },
  containerText: {
    margin: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  yearContainer: {
    marginBottom: 8,
  },
});
export default HomeScreen;
