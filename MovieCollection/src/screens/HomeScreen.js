import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import {movieData} from '../../data/MovieData';
import {ShowMovie} from '../component/MovieComponent';
import {useState, useEffect} from 'react';
import {Icon} from 'react-native-elements';
import {ButtonComponent} from '../component/ButtonComponent';

const HomeScreen = props => {
  const [recommended, setRecommended] = useState([]);
  const [mostViewed, setMostViewed] = useState([]);

  const compareRating = (a, b) => {
    const ratingA = a.rating;
    const ratingB = b.rating;
    if (ratingA > ratingB) {
      return -1;
    } else if (ratingA < ratingB) {
      return 1;
    } else {
      return 0;
    }
  };

  const compareView = (a, b) => {
    const viewA = a.viewers;
    const viewB = b.viewers;
    if (viewA > viewB) {
      return -1;
    } else if (viewA < viewB) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const sortedRecommended = [...movieData].sort(compareRating);
    setRecommended(sortedRecommended);
  }, []);

  useEffect(() => {
    const sortedMostViewed = [...movieData].sort(compareView);
    setMostViewed(sortedMostViewed);
  }, []);

  const {navigation} = props;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentContainerStyle}
        data={recommended}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.containerAnItem}>
              <Image source={{uri: item.imageLink}} style={styles.imageItem} />
              <View style={styles.containerText}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.yearContainer}>
                  <Icon
                    name="calendar"
                    type="font-awesome"
                    size={24}
                    color="#000"
                  />
                  <Text> {item.year}</Text>
                </View>
                <View style={styles.yearContainer}>
                  <Icon name="star" type="font-awesome" size={24} />
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
                </View>
                <ButtonComponent
                  onPress={() => navigation.navigate('DetailMovie', item)}
                />
              </View>
            </View>
          );
        }}
        ListHeaderComponent={
          <View style={styles.container}>
            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Most Viewed</Text>
              </View>
            </View>
            <FlatList
              horizontal
              data={mostViewed}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                return (
                  <ShowMovie
                    image={item.imageLink}
                    title={item.title}
                    viewers={item.viewers}
                  />
                );
              }}
            />
            <View style={styles.mainCategoryContainer}>
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryText}>Recommended</Text>
              </View>
            </View>
          </View>
        }
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainCategoryContainer: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    flexDirection: 'row',
  },
  categoryContainer: {
    flex: 1,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    width: 100,
    height: 20,
  },
});
export default HomeScreen;
