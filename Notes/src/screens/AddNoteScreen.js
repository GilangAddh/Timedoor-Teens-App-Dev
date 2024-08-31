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
import {HeaderComponent} from '../components/NoteComponents';
import {MainComponent} from '../components/NoteComponents';

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
      <HeaderComponent title="Create" onPress={() => saveNote(tempNote)} />
      <MainComponent
        date={getCurrentDate()}
        onChangeText={text => setTempNote(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default AddNoteScreen;
