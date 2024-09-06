import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {useState, useEffect} from 'react';
import realm from '../../store/realm';
import {CheckBox} from 'react-native-elements';

const NoteListScreen = props => {
  const {navigation} = props;
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
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

  const searchData = value => {
    const dataFromDatabase = realm.objects('Note').sorted('date', true);

    const searchedData = dataFromDatabase.filter(item => {
      const itemData = item.note.toLowerCase();
      const valueData = value.toLowerCase();
      return itemData.indexOf(valueData) > -1;
    });

    setData(searchedData);
    setSearchText(value);
  };

  const setCheckBox = (id, status) => {
    const newData = data.map(item => {
      if (item.id === id) {
        item.checkedStatus = !status;
      }
      return item;
    });
    setData(newData);
  };

  const removeNotes = () => {
    const checkedItems = data
      .filter(item => item.checkedStatus)
      .map(item => item.id);

    if (checkedItems.length) {
      realm.write(() => {
        checkedItems.forEach(id => {
          const note = realm.objects('Note').filtered(`id = ${id}`);
          realm.delete(note);
        });
      });

      const updatedNotes = realm
        .objects('Note')
        .sorted('date', true)
        .map(item => {
          item.checkedStatus = false;
          return item;
        });

      setData(updatedNotes);
      setIsEdit(false);
    } else {
      alert('Nothing to remove!');
    }
  };

  useEffect(() => {
    const noteListPage = navigation.addListener('focus', () => {
      const notes = realm.objects('Note');
      const noteByDate = notes.sorted('date', true);
      const newData = noteByDate.map(item => {
        item.checkedStatus = false;
        return item;
      });
      console.log(newData);
      setData(newData);
      setSearchText('');
    });
    return noteListPage;
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Notes</Text>
        {data.length !== 0 ? (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEdit(!isEdit)}>
            {isEdit ? <Text>Cancel</Text> : <Text>Edit</Text>}
          </TouchableOpacity>
        ) : null}
      </View>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        ListHeaderComponent={
          <View style={styles.searchBox}>
            <Icon
              name="search"
              type="font-awesome"
              size={18}
              style={styles.searchIcon}
              color="grey"
            />
            <TextInput
              placeholder="Search here"
              style={styles.searchInput}
              onChangeText={text => searchData(text)}
              value={searchText}
            />
          </View>
        }
        ListEmptyComponent={
          <View style={styles.noItem}>
            <Text>No items.</Text>
          </View>
        }
        renderItem={({item}) => {
          return (
            <View style={styles.mainDataContainer}>
              <TouchableOpacity
                style={styles.noteButton}
                onPress={() => navigation.navigate('EditNote', {id: item.id})}>
                <View style={styles.noteContainer}>
                  <Text style={styles.noteText}>{item.note}</Text>
                </View>
                <Text style={styles.dateText}>{dateFormat(item.date)}</Text>
              </TouchableOpacity>
              {isEdit ? (
                <CheckBox
                  size={20}
                  containerStyle={styles.checkBox}
                  onPress={() => setCheckBox(item.id, item.checkedStatus)}
                  checked={item.checkedStatus}
                />
              ) : null}
            </View>
          );
        }}
      />

      {isEdit ? null : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Icon
              name="plus"
              type="antdesign"
              size={24}
              color="white"
              onPress={() => navigation.navigate('AddNote')}
            />
          </TouchableOpacity>
        </View>
      )}
      {isEdit ? (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => removeNotes()}>
          <Icon name="delete" type="antdesign" size={20} color="white" />
          <View style={styles.containerDeleteText}>
            <Text style={styles.deleteText}>Delete</Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 8,
    backgroundColor: 'moccasin',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    padding: 8,
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  addButton: {
    backgroundColor: 'pink',
    padding: 16,
    borderRadius: 100,
  },
  flatListContainer: {
    padding: 8,
  },
  mainDataContainer: {
    margin: 8,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noteButton: {
    flex: 1,
    padding: 8,
    margin: 8,
  },
  noteContainer: {
    maxHeight: 40,
    paddingBottom: 10,
  },
  noteText: {
    textAlign: 'justify',
  },
  dateText: {
    fontSize: 12,
  },
  searchBox: {
    flexDirection: 'row',
    borderWidth: 1,
    margin: 8,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  searchIcon: {
    padding: 8,
    paddingRight: 0,
  },
  searchInput: {
    height: 30,
    padding: 8,
    flex: 1,
  },
  noItem: {
    alignItems: 'center',
    margin: 8,
  },
  checkBox: {
    paddingRight: 0,
    paddingLeft: 0,
  },
  editButton: {
    position: 'absolute',
    padding: 16,
    right: 8,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDeleteText: {
    marginLeft: 8,
  },
  deleteText: {
    color: 'white',
  },
});

export default NoteListScreen;
