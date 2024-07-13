import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {songData} from '../../data/SongData';

const HomeScreen = props => {
  const {navigation} = props;
  return (
    <View>
      <FlatList
        data={songData}
        keyExtractor={item => item.id}
        style={styles.flStyle}
        renderItem={({item}) => {
          return (
            <View style={styles.dataContainer}>
              <Image source={{uri: item.imageLink}} style={styles.image} />
              <View style={styles.descContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.singerContainer}>
                  <Text>{item.singer}</Text>
                </View>
                {item.rating === 5 ? (
                  <Image
                    style={styles.rating}
                    source={require('../../assets/images/five-stars.png')}
                  />
                ) : item.rating === 4 ? (
                  <Image
                    style={styles.rating}
                    source={require('../../assets/images/four-stars.png')}
                  />
                ) : item.rating === 3 ? (
                  <Image
                    style={styles.rating}
                    source={require('../../assets/images/three-stars.png')}
                  />
                ) : item.rating === 2 ? (
                  <Image
                    style={styles.rating}
                    source={require('../../assets/images/two-stars.png')}
                  />
                ) : item.rating === 1 ? (
                  <Image
                    style={styles.rating}
                    source={require('../../assets/images/star.png')}
                  />
                ) : null}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Detail', {item})}>
                    <Text style={styles.buttonText}>See Detail</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flStyle: {
    padding: 8,
  },
  dataContainer: {
    margin: 8,
    borderWidth: 2,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  descContainer: {
    marginLeft: 8,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  singerContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  rating: {
    width: 120,
    height: 20,
  },
  buttonContainer: {
    alignItems: 'baseline',
    marginTop: 8,
  },
  button: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#A6A6BD',
    backgroundColor: '#AFCAE8',
  },
  buttonText: {
    color: 'white',
  },
});

export default HomeScreen;
