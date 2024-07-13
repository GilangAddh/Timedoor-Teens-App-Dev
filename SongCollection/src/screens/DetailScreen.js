import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SongComponent} from '../component/SongComponent';

const DetailScreen = props => {
  const {route} = props;
  const song = route.params.item;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.movieContainer}>
        <View style={styles.middle}>
          <Image style={styles.image} source={{uri: song.imageLink}} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{song.title}</Text>
        </View>
        <SongComponent name="Singer" value={song.singer} />
        <SongComponent name="Year" value={song.year} />
        <SongComponent name="Genre" value={song.genre} />
        <SongComponent name="Songwriters" value={song.songwriters} />
        <SongComponent name="Rating" isRating={true} rating={song.rating} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  movieContainer: {
    margin: 8,
  },
  middle: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'salmon',
  },
  titleContainer: {
    marginTop: 8,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'salmon',
  },
});

export default DetailScreen;
