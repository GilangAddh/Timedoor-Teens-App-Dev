import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import realm from '../../store/realm';
import {Icon, CheckBox} from 'react-native-elements';
import {MediaComponent} from '../components/MediaComponents';
import {Linking} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen-hooks';
import {ButtonComponent} from '../components/ButtonComponents';

const ShowProductScreen = props => {
  const {navigation, route} = props;
  const [data, setData] = useState([]);
  const [isBuy, setIsBuy] = useState(false);
  const [contact, setContact] = useState({
    phoneNumber: '',
    instagram: '',
    facebook: '',
  });
  const category = route.params.categoryId;
  const [isRemove, setIsRemove] = useState(false);

  const collectData = () => {
    const allData = realm.objects('Product').filtered(`category = ${category}`);
    const newData = allData.map(item => {
      item.checkedStatus = false;
      return item;
    });
    setData(newData);
    console.log(newData);
  };
  const buyProduct = (whatsapp, instagramId, facebookId) => {
    setContact({
      phoneNumber: whatsapp,
      instagram: instagramId,
      facebook: facebookId,
    });
    setIsBuy(true);
  };

  const onClickMedia = type => {
    if (type === 'whatsapp') {
      Linking.openURL(`https://wa.me/${contact.phoneNumber}`);
    } else if (type === 'instagram') {
      Linking.openURL(`https://www.instagram.com/${contact.phoneNumber}`);
    } else {
      Linking.openURL(`https://m.me/${contact.facebook}`);
    }
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

  const onCancel = () => {
    const newData = data.map(item => {
      item.checkedStatus = false;
      return item;
    });
    setData(newData);
    setIsRemove(false);
  };

  const onDelete = () => {
    const checkedTrue = [];

    data.forEach(item => {
      if (item.checkedStatus) {
        checkedTrue.push(item.id);
      }
    });

    if (checkedTrue.length != 0) {
      realm.write(() => {
        for (let i = 0; i < checkedTrue.length; i++) {
          const removeData = realm
            .objects('Product')
            .filtered(`id = ${checkedTrue[i]}`);
          realm.delete(removeData);
        }
      });
      alert('Successfully removed the products!');
      setIsRemove(false);
      collectData();
    } else {
      alert('Nothing to remove!');
    }
  };

  useEffect(() => {
    console.log(category);
    const productPage = navigation.addListener('focus', () => {
      collectData();
    });
    return productPage;
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={data}
        contentContainerStyle={styles.flatListContainer}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <View>
            <Text style={styles.noItems}>No Items.</Text>
          </View>
        }
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.itemButton}
              onPress={() =>
                navigation.navigate('EditProduct', {idProduct: item.id})
              }
              onLongPress={() => setIsRemove(true)}>
              {/* <TouchableOpacity
                  style={styles.itemButton}
                  onPress={() => navigation.navigate('EditProduct', { idProduct: item.id })}
                  onLongPress={() => setIsRemove(prevState => !prevState)}
              > */}
              <View style={styles.productContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ImageZoom', {
                      imagePath: item.imagePath,
                    })
                  }>
                  <Image style={styles.image} source={{uri: item.imagePath}} />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.productName}</Text>
                  <Text style={styles.text}>{item.description}</Text>
                  <Text style={styles.text}>$ {item.price}</Text>
                </View>
              </View>
              {isRemove ? (
                <CheckBox
                  size={30}
                  containerStyle={styles.checkBox}
                  onPress={() => setCheckBox(item.id, item.checkedStatus)}
                  checked={item.checkedStatus}
                />
              ) : (
                <TouchableOpacity
                  onPress={() =>
                    buyProduct(item.phoneNumber, item.instagram, item.facebook)
                  }>
                  <Icon name="shoppingcart" type="antdesign" size={30} />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          );
        }}
      />
      {isBuy ? (
        <View style={styles.modalContainer}>
          <View style={styles.box}>
            <TouchableOpacity
              style={styles.cancel}
              onPress={() => setIsBuy(false)}>
              <Icon name="close" type="antdesign" size={18} />
            </TouchableOpacity>
            <Text style={[styles.sellerText, styles.title]}>
              Contact the seller through this media:
            </Text>
            {contact.phoneNumber !== '' ? (
              <MediaComponent
                source={require('../../assets/images/whatsapp.png')}
                value={contact.phoneNumber}
                onPress={() => onClickMedia('whatsapp')}
              />
            ) : null}
            {contact.instagram !== '' ? (
              <MediaComponent
                source={require('../../assets/images/instagram.png')}
                value={contact.instagram}
                onPress={() => onClickMedia('instagram')}
              />
            ) : null}
            {contact.facebook !== '' ? (
              <MediaComponent
                source={require('../../assets/images/facebook.png')}
                value={contact.facebook}
                onPress={() => onClickMedia('facebook')}
              />
            ) : null}
          </View>
        </View>
      ) : null}
      {isRemove ? (
        <View style={styles.buttonContainer}>
          <ButtonComponent
            backgroundColor="red"
            title="Delete"
            onPress={() => onDelete()}
          />
          <ButtonComponent
            backgroundColor="green"
            title="Cancel"
            onPress={() => onCancel()}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatListContainer: {
    padding: 8,
  },
  itemButton: {
    margin: 8,
    padding: 16,
    borderColor: '#7CAF58',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: wp('25%'),
    height: wp('25%'),
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  text: {
    color: 'black',
    fontSize: hp('2%'),
  },
  noItems: {
    textAlign: 'center',
  },
  modalContainer: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    backgroundColor: 'white',
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancel: {
    padding: 8,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  sellerText: {
    marginBottom: 8,
    marginTop: 32,
  },
  checkBox: {
    position: 'absolute',
    right: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    height: hp('7%'),
  },
});

export default ShowProductScreen;
