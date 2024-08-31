import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {HeaderComponent, MainComponent} from '../components/NoteComponents';
import realm from '../../store/realm';
import {useState, useEffect} from 'react';

const EditNoteScreen = props => {
  const {route, navigation} = props;
  const id = route.params.id;
  const [dataToUpdate, setDataToUpdate] = useState([]);
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
      <HeaderComponent title="Edit" />
      <MainComponent date="Date" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default EditNoteScreen;
