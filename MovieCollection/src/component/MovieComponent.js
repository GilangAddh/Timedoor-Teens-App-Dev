import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

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
});

export const ShowMovie = props => {
  const {image, title, viewers} = props;

  const numberWithCommas = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <View style={styles.horizontalDataContainer}>
      <Image style={styles.movieImage} source={{uri: image}} />
      <View style={styles.horizontalTitleContainer}>
        <Text style={styles.horizontalTitle}>
          <Icon name="info" type="font-awesome" size={16} color="#000" />
          {title}
        </Text>
      </View>
      <View style={styles.viewersContainer}>
        <View style={styles.viewersText}>
          <Text>{numberWithCommas(viewers)}</Text>
        </View>
      </View>
    </View>
  );
};
