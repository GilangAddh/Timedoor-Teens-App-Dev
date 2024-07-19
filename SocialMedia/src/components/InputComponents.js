import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export const Input = props => {
  const {title} = props;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} {...props} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 8,
  },
  titleContainer: {
    marginLeft: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 8,
  },
  input: {
    padding: 8,
    flex: 1,
    color: 'black',
  },
});
