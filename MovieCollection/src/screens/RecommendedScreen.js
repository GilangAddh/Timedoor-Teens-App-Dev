import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {ShowMovie} from '../component/MovieComponent';

const RecommendedScreen = props => {
  const {route, navigation} = props;
  const sortedRecommended = route.params.allRecommended;
  useEffect(() => {
    console.log(sortedRecommended);
  }, []);
  return (
    <View>
      <FlatList
        data={sortedRecommended}
        contentContainerStyle={styles.mainContainer}
        numColumns={2}
        key={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <ShowMovie
              image={item.imageLink}
              title={item.title}
              isRecommended={true}
              rating={item.rating}
              onPress={() => navigation.navigate('DetailMovie', item)}
            />
          );
        }}
      />
      <Text>Tes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 8,
  },
});

export default RecommendedScreen;
