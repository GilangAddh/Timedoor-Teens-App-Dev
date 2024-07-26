import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button} from '../components/ButtonComponents';
import {Input} from '../components/InputComponents';
import {useSelector} from 'react-redux';

const LoginScreen = props => {
  const {navigation} = props;
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const globalProfileData = useSelector(store => store.profileReducer);

  const checkData = () => {
    if (username === '' || password === '') {
      alert('Please input your username and password!');
    } else if (
      username.toLowerCase() === globalProfileData.username.toLowerCase() &&
      password.toLowerCase() === globalProfileData.password.toLowerCase()
    ) {
      navigation.navigate('Home');
    } else {
      alert(`Your username and password didn’t match!`);
    }
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    console.log('GLOBAL STATE ON LOGIN PAGE');
    console.log(globalProfileData);
  }, [globalProfileData]);

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/login.png')}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            title="Username"
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={username}
          />
          <Input
            title="Password"
            placeholder="Password"
            isPassword={true}
            secureTextEntry={isPassVisible ? false : true}
            iconName={isPassVisible ? 'eye-off' : 'eye'}
            onPress={() => setIsPassVisible(!isPassVisible)}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <Button text="Login" onPress={checkData} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
  },
  mainContainer: {
    backgroundColor: '#E6E6FA',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginTop: 32,
    marginBottom: 16,
  },
  image: {
    width: 180,
    height: 180,
  },
  inputContainer: {
    padding: 16,
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  text: {
    fontSize: 16,
  },
  registerText: {
    color: '#1A5B0A',
    fontSize: 16,
  },
});
