import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import {InputComponent} from '../components/InputComponents';
import SelectDropdown from 'react-native-select-dropdown';
import {categoryList} from '../../data/Data';
import realm from '../../store/realm';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen-hooks';

const EditProductScreen = props => {
  const {navigation, route} = props;
  const idProduct = route.params.idProduct;
  const [productData, setProductData] = useState({
    productName: '',
    imagePath: '',
    category: null,
    description: '',
    price: null,
    instagram: '',
    facebook: '',
    phoneNumber: '',
  });

  const onInputChange = (type, value) => {
    setProductData({
      ...productData,
      [type]: value,
    });
  };

  const addImage = () => {
    ImageCropPicker.openPicker({
      width: 2000,
      height: 2000,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setProductData({
          ...productData,
          imagePath: image.path, // Mengubah properti imagePath di state
        });
      })
      .catch(errorMessage => {
        console.log(errorMessage);
      });
  };

  const saveData = () => {
    if (
      productData.productName == '' ||
      productData.imagePath == '' ||
      productData.description == '' ||
      productData.price == '' ||
      productData.category == null
    ) {
      alert('Please fill all your product information!');
    } else if (
      productData.phoneNumber == '' &&
      productData.instagram == '' &&
      productData.facebook == ''
    ) {
      alert('Please fill at least one seller contact!');
    } else {
      const updatedData = realm
        .objects('Product')
        .filtered(`id = ${idProduct}`)[0];
      if (
        updatedData.productName === productData.productName &&
        updatedData.imagePath === productData.imagePath &&
        updatedData.category === productData.category &&
        updatedData.description === productData.description &&
        updatedData.price === parseInt(productData.price) &&
        updatedData.instagram === productData.instagram &&
        updatedData.facebook === productData.facebook &&
        updatedData.phoneNumber === productData.phoneNumber
      ) {
        // Alert if no data has changed
        Alert.alert('Nothing to Update', 'Nothing data to update!', [
          {
            onPress: () => navigation.goBack(),
            text: 'OK',
          },
        ]);
      } else {
        realm.write(() => {
            updatedData.productName = productData.productName;
            updatedData.imagePath = productData.imagePath;
            updatedData.category = productData.category;
            updatedData.description = productData.description;
            updatedData.price = parseInt(productData.price);
            updatedData.instagram = productData.instagram;
            updatedData.facebook = productData.facebook;
            updatedData.phoneNumber = productData.phoneNumber;
          });
          Alert.alert(
            'Success',
            'Successfully updated your product information!',
            [
              {
                onPress: () => navigation.goBack(),
                text: 'OK',
              },
            ],
          );
      }
    }
  };

  useEffect(() => {
    const data = realm.objects('Product').filtered(`id = ${idProduct}`)[0];

    setProductData({
      productName: data.productName,
      imagePath: data.imagePath,
      category: data.category,
      description: data.description,
      price: String(data.price),
      instagram: data.instagram,
      facebook: data.facebook,
      phoneNumber: data.phoneNumber,
    });
  }, [idProduct]);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => addImage()}>
            <Image
              style={{
                width: productData.imagePath !== '' ? wp('50%') : 50,
                height: productData.imagePath !== '' ? wp('50%') : 50,
              }}
              source={{
                uri:
                  productData.imagePath !== ''
                    ? productData.imagePath
                    : 'https://static.vecteezy.com/system/resources/previews/024/263/864/original/add-image-icon-vector.jpg',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalContainer}>
          <InputComponent
            placeholder="Product Name"
            value={productData.productName}
            onChangeText={text => onInputChange('productName', text)}
          />
          <SelectDropdown
            data={categoryList}
            defaultButtonText="Select Category"
            onSelect={item => {
              onInputChange('category', item.id);
            }}
            buttonTextAfterSelection={item => {
              return item.name;
            }}
            rowTextForSelection={item => {
              return item.name;
            }}
            buttonStyle={styles.SelectDropdown}
            buttonTextStyle={styles.selectText}
            defaultValueByIndex={productData.category - 1}
          />
        </View>
        <View style={styles.horizontalContainer}>
          <InputComponent
            placeholder="Description"
            value={productData.description}
            onChangeText={text => onInputChange('description', text)}
            isDescription={true}
          />
          <InputComponent
            placeholder="Price"
            value={productData.price}
            onChangeText={text => onInputChange('price', text)}
            isIcon={true}
            name="dollar"
            type="font-awesome"
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.sellerText}>Seller Contact</Text>
        <InputComponent
          placeholder="WhatsApp number (ex : +62851564)"
          value={productData.phoneNumber}
          onChangeText={text => onInputChange('phoneNumber', text)}
          isIcon={true}
          name="whatsapp"
          type="font-awesome"
          keyboardType="numeric"
        />
        <InputComponent
          placeholder="Instagram usename (ex : giilangadhii)"
          value={productData.instagram}
          onChangeText={text => onInputChange('instagram', text)}
          isIcon={true}
          name="instagram"
          type="font-awesome"
        />
        <InputComponent
          placeholder="Facebook usename (ex : Gilang Addh)"
          value={productData.facebook}
          onChangeText={text => onInputChange('facebook', text)}
          isIcon={true}
          name="facebook-square"
          type="font-awesome"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveText} onPress={() => saveData()}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    margin: 8,
    paddingBottom: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  imageButton: {
    width: wp('50%'),
    height: wp('50%'),
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sellerText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 8,
    marginBottom: 0,
    color: 'black',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  saveButton: {
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#D1E5C2',
  },
  saveText: {
    color: 'black',
  },
  SelectDropdown: {
    borderRadius: 10,
    backgroundColor: 'skyblue',
    width: wp('40%'),
    height: hp('4%'),
    marginLeft: 8,
  },
  selectText: {
    fontSize: hp('1.5%'),
  },
});

export default EditProductScreen;
