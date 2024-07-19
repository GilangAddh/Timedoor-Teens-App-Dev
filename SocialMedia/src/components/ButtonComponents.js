import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const Button = props => {
  const {text} = props;
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} {...props}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '40%',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    margin: 16,
    backgroundColor: '#CAE3BB',
  },
  button: {
    padding: 8,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
