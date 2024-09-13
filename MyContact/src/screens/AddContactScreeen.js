import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import realm from '../../store/realm';

const AddContactScreen = props => {
  const {navigation} = props;

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const saveContact = () => {
    if (name !== '' && phoneNumber !== '') {
      realm.write(() => {
        const data = realm.objects('Contact');
        const lastId = data.length === 0 ? 1 : data[data.length - 1].id;

        realm.create('Contact', {
          id: data.length === 0 ? 1 : lastId + 1,
          name: name,
          phoneNumber: phoneNumber,
        });
      });
      alert('Successfully save your Contact!');
      navigation.navigate('ContactList');
    } else {
      alert('Empty Contact');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Write name here"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Write phone number here"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={saveContact}>
          <Text style={styles.buttonText}>SAVE CONTACT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#B7F1D4',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default AddContactScreen;
