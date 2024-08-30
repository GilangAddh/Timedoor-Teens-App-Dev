import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import realm from '../../store/realm';
import {useState} from 'react';

const AddNoteScreen = props => {
  const {navigation} = props;
  const [tempNote, setTempNote] = useState('');

  const saveNote = newNote => {
    const allData = realm.objects('Note');
    const dataLength = allData.length;
    let lastIdFromRealm = 0;
    if (dataLength !== 0) {
      lastIdFromRealm = allData[dataLength - 1].id;
    }
    if (newNote !== '') {
      realm.write(() => {
        realm.create('Note', {
          id: dataLength === 0 ? 1 : lastIdFromRealm + 1,
          note: newNote,
          date: new Date().toISOString(),
        });
      });
      alert('Successfully save your note!');
      const data = realm.objects('Note');
      navigation.navigate('NoteList');
      console.log(data);
    } else {
      alert('Empty Note');
    }
  };

  const getCurrentDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const currentDate = new Date();
    const dateOnly = currentDate.getDate();
    const monthOnly = currentDate.getMonth();
    const yearOnly = currentDate.getFullYear();

    return `${months[monthOnly]} ${dateOnly}, ${yearOnly}`;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Create</Text>
        <TouchableOpacity style={styles.button}>
          <Icon
            name="check"
            type="font-awesome-5"
            size={18}
            onPress={() => saveNote(tempNote)}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.date}>{getCurrentDate()}</Text>
      <TextInput
        multiline
        placeholder="Write here"
        style={styles.input}
        onChangeText={text => setTempNote(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
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

export default AddNoteScreen;
