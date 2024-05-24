import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const ThirdScreen = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column-reverse'}}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 2,
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        }}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://vignette2.wikia.nocookie.net/sonicpokemon/images/7/77/Pikachu.png/revision/latest?cb=20120603213349',
          }}
        />
        <Text style={{color: 'white', fontSize: 18}}>Pikachu</Text>
      </View>
      <View
        style={{
          backgroundColor: 'orange',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://i.pinimg.com/originals/d6/61/96/d66196beb60d306a966ea39ed11c2b3d.png',
          }}
        />
        <Text style={{color: 'white', fontSize: 18}}>Bulbasour</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 3,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
        }}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: 'https://www.giantbomb.com/a/uploads/scale_medium/13/135472/1892310-078rapidash.png',
          }}
        />
        <Text style={{color: 'white', fontSize: 18}}>Raspidash</Text>
      </View>
    </View>
  );
};

const AddImage = () => {
  return (
    <ScrollView horizontal={true}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={require('../../assets/images/pikachu.png')}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={{
              uri: 'https://i.pinimg.com/originals/30/b5/9b/30b59b7f50c71bb7d2ce9f0fc1c125f2.png',
            }}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={{
              uri: 'https://i.pinimg.com/originals/d6/61/96/d66196beb60d306a966ea39ed11c2b3d.png',
            }}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={{
              uri: 'https://www.giantbomb.com/a/uploads/scale_medium/13/135472/1892310-078rapidash.png',
            }}
          />
        </View>
        <View style={{margin: 8, padding: 8}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              borderWidth: 1,
              borderColor: 'green',
              backgroundColor: 'aliceblue',
            }}
            source={{
              uri: 'https://vignette.wikia.nocookie.net/nintendo/images/3/32/Psyduck.png/revision/latest?cb=20160509232356&path-prefix=en',
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const ChallengeScreen = () => {
  return (
    <View>
      <View style={{alignItems: 'center', margin: 8}}>
        <Text style={{fontWeight: 'bold', fontSize: 26, color: 'blue'}}>
          Pokemon’s Profile
        </Text>
      </View>
      <ScrollView>
        <View style={{margin: 12, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'lavender',
                borderRadius: 12,
                borderWidth: 2,
                borderColor: 'green',
                margin: 12,
              }}
              source={require('../../assets/images/pikachu.png')}
            />
            <View style={{justifyContent: 'center'}}>
              <Text>
                Name : Pikachu{'\n'}
                Category : Mouse{'\n'}
                Abilities : Static{'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{margin: 12, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'lavender',
                borderRadius: 12,
                borderWidth: 2,
                borderColor: 'green',
                margin: 12,
              }}
              source={require('../../assets/images/pikachu.png')}
            />
            <View style={{justifyContent: 'center'}}>
              <Text>
                Name : Pikachu{'\n'}
                Category : Mouse{'\n'}
                Abilities : Static{'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={{margin: 12, padding: 8, flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            <Image
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'lavender',
                borderRadius: 12,
                borderWidth: 2,
                borderColor: 'green',
                margin: 12,
              }}
              source={require('../../assets/images/pikachu.png')}
            />
            <View style={{justifyContent: 'center'}}>
              <Text>
                Name : Pikachu{'\n'}
                Category : Mouse{'\n'}
                Abilities : Static{'\n'}
                Weaknesses : Ground
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChallengeScreen;
