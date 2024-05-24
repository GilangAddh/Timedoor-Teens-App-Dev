import React from 'react';
import {View, Text, ImageBackground, TextInput, ScrollView} from 'react-native';
import {InputComponent} from '../components/InputComponent';
const FourthScreen = () => {
  return (
    <ScrollView>
      <View style={{margin: 16}}>
        <ImageBackground
          style={{
            width: '100%',
            height: 300,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
          imageStyle={{borderRadius: 10, opacity: 0.7}}
          source={{
            uri: 'https://wallpaperaccess.com/full/250180.jpg',
          }}>
          <Text
            style={{
              backgroundColor: 'mistyrose',
              padding: 8,
              margin: 8,
              fontSize: 18,
              fontWeight: 'bold',
              borderRadius: 6,
            }}>
            Disneyland
          </Text>
        </ImageBackground>
        <InputComponent
          title="Description"
          height={140}
          placeholder="About this page"
          multiline={true}
        />
        <InputComponent
          height={40}
          title="Phone Number"
          placeholder="Phone number"
          multiline={true}
          keyboardType="phone-pad"
        />
        <InputComponent
          height={40}
          title="Location"
          placeholder="Location"
          multiline={true}
          keyboardType="default"
        />
      </View>
    </ScrollView>
  );
};

const ChallengeScreen4 = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
        imageStyle={{opacity: 0.5}}
        source={{
          uri: 'https://i.pinimg.com/736x/e4/28/c5/e428c5f6e045bcf567fa4267f7985076.jpg',
        }}>
        <View style={{alignItems: 'flex-end'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              backgroundColor: 'beige',
              padding: 12,
              margin: 12,
            }}>
            Colosseum
          </Text>
        </View>
        <View style={{padding: 8, margin: 8}}>
          <InputComponent
            title="Description"
            height={140}
            placeholder="About this page"
            multiline={true}
          />
          <InputComponent
            height={40}
            title="Phone Number"
            placeholder="Phone number"
            multiline={true}
            keyboardType="phone-pad"
          />
          <InputComponent
            height={40}
            title="Location"
            placeholder="Location"
            multiline={true}
            keyboardType="default"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ChallengeScreen4;
