import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';

export const HeaderComponent = props => {
  const {title} = props;
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button}>
        <Icon name="check" type="font-awesome-5" size={18} {...props} />
      </TouchableOpacity>
    </View>
  );
};

export const MainComponent = props => {
  const {date} = props;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.date}>{date}</Text>
      <TextInput
        multiline
        placeholder="Write here"
        style={styles.input}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 8,
    backgroundColor: 'moccasin',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    padding: 8,
    fontWeight: 'bold',
  },
  button: {
    padding: 8,
  },
  mainContainer: {
    flex: 1,
  },
  date: {
    marginTop: 16,
    marginLeft: 16,
  },
  input: {
    fontSize: 16,
    flex: 1,
    paddingRight: 16,
    paddingLeft: 16,
    textAlignVertical: 'top',
  },
});
