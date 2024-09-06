import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {HeaderComponent, MainComponent} from '../components/NoteComponents';
import realm from '../../store/realm';
import {useState, useEffect} from 'react';

const EditNoteScreen = props => {
  const {route, navigation} = props;
  const id = route.params.id;
  const [dataToUpdate, setDataToUpdate] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const dateFormat = date => {
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

    const noteDate = new Date(date);
    const dateOnly = noteDate.getDate();
    const monthOnly = noteDate.getMonth();
    const yearOnly = noteDate.getFullYear();

    return `${months[monthOnly]} ${dateOnly}, ${yearOnly}`;
  };

  const [newNote, setNewNote] = useState('');
  const editNote = (value, editStatus) => {
    setNewNote(value);
    setIsEdit(editStatus);
  };
  const saveNote = value => {
    if (value === '') {
      alert("Note can't be empty!");
      return;
    }

    const allData = realm.objects('Note');
    allData.forEach(item => {
      if (item.id === id) {
        if (item.note !== value) {
          realm.write(() => {
            item.note = value;
            item.date = new Date().toISOString();
          });
          navigation.navigate('NoteList');
        } else {
          alert('Nothing changed!');
        }
      }
    });
  };

  useEffect(() => {
    const data = realm.objects('Note').filtered(`id = ${id}`);
    setDataToUpdate(data);
  }, []);
  useEffect(() => {
    console.log('edit screen');
    console.log(dataToUpdate);
  }, [dataToUpdate]);
  return (
    <View style={styles.mainContainer}>
      <HeaderComponent
        title="Edit"
        onPress={() => saveNote(isEdit ? newNote : dataToUpdate[0].note)}
      />
      {dataToUpdate.length > 0 ? (
        <MainComponent
          date={dateFormat(dataToUpdate[0].date)}
          value={isEdit ? newNote : dataToUpdate[0].note}
          onChangeText={text => editNote(text, true)}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default EditNoteScreen;
