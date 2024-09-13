import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import realm from '../../store/realm';

const ContactListScreen = props => {
  const {navigation} = props;
  const [data, setData] = useState([]);
  const getData = () => {
    const allData = realm.objects('Contact');
    setData(allData);
  };
  const deleteContact = id => {
    const data = realm.objects('Contact').filtered(`id = ${id}`);
    realm.write(() => {
      realm.delete(data);
    });
    const collectData = realm.objects('Contact');
    setData(collectData);
  };

  useEffect(() => {
    console.log(data);
    getData();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        ListEmptyComponent={
          <View style={styles.noItem}>
            <Text>No items.</Text>
          </View>
        }
        renderItem={({item}) => {
          return (
            <View style={styles.mainDataContainer}>
              <View>
                <Text style={styles.noteText}>{item.name}</Text>
                <Text style={styles.dateText}>{item.phoneNumber}</Text>
              </View>
              <TouchableOpacity>
                <Icon
                  name="cross"
                  type="entypo"
                  size={18}
                  style={styles.searchIcon}
                  color="grey"
                  onPress={() => deleteContact(item.id)}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Icon
            name="plus"
            type="antdesign"
            size={24}
            color="black"
            onPress={() => navigation.navigate('AddContact')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  addButton: {
    backgroundColor: '#B7F1D4',
    padding: 16,
    borderRadius: 100,
  },
  flatListContainer: {
    padding: 8,
  },
  mainDataContainer: {
    margin: 8,
    padding: 16,
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
    fontWeight: 'bold',
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

export default ContactListScreen;
