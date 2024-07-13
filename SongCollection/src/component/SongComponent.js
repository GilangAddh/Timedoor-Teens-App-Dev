import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export const SongComponent = props => {
  const {name, value, isRating, rating} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.generalFontSize}>{name}</Text>
      </View>
      <Text style={styles.generalFontSize}>: </Text>
      <View style={styles.valueContainer}>
        {isRating ? (
          rating === 5 ? (
            <Image
              style={styles.ratingImage}
              source={require('../../assets/images/five-stars.png')}
            />
          ) : rating === 4 ? (
            <Image
              style={styles.ratingImage}
              source={require('../../assets/images/four-stars.png')}
            />
          ) : rating === 3 ? (
            <Image
              style={styles.ratingImage}
              source={require('../../assets/images/three-stars.png')}
            />
          ) : rating === 2 ? (
            <Image
              style={styles.ratingImage}
              source={require('../../assets/images/two-stars.png')}
            />
          ) : (
            <Image
              style={styles.ratingImage}
              source={require('../../assets/images/star.png')}
            />
          )
        ) : (
          <Text style={styles.textValue}>{value}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalDataContainer: {
    margin: 8,
    width: 180,
    alignItems: 'center',
    borderColor: '#96ceb4',
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
  },
  horizontalTitleContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  horizontalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  movieImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
  },
  viewersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewersText: {
    marginLeft: 8,
  },
  mainContainer: {
    flexDirection: 'row',
    margin: 8,
  },
  nameContainer: {
    flex: 1,
  },
  generalFontSize: {
    fontSize: 16,
  },
  valueContainer: {
    flex: 3,
  },
  textValue: {
    textAlign: 'justify',
    fontSize: 16,
  },
  ratingImage: {
    width: 100,
    height: 20,
  },
});
