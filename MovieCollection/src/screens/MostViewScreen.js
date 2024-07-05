import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {ShowMovie} from '../component/MovieComponent';
const MostViewScreen = props => {
  const {route, navigation} = props;
  const sortedMostViewed = route.params.allMostViewed;
  useEffect(() => {
    console.log(sortedMostViewed);
  }, []);
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.mainDataContainer}
        data={sortedMostViewed}
        keyExtractor={item => item.id}
        numColumns={2}
        key={2}
        renderItem={({item}) => {
          return (
            // <View style={styles.movieContainer}>
            //   <Image style={styles.movieImage} source={{uri: item.imageLink}} />
            // </View>
            <ShowMovie
              image={item.imageLink}
              title={item.title}
              viewers={item.viewers}
              onPress={() => navigation.navigate('DetailMovie', item)}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainDataContainer: {
    padding: 8,
  },
  movieContainer: {
    margin: 8,
    padding: 16,
    backgroundColor: 'skyblue',
  },
  movieImage: {
    width: 130,
    height: 200,
  },
});

export default MostViewScreen;
