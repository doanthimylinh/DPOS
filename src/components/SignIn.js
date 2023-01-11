import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {phoneNumberValidator} from '../helper/phoneNumberValidator';

export default function SignIn({navigation}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const onLoginPress = () => {
    const phoneNumberError = phoneNumberValidator(phoneNumber);
    if (phoneNumberError) {
      setError('Số điện thoại không hợp lệ');
    }
    navigation.navigate('Vertify');
  };
  const onGGLoginPress = async () => {};
  return (
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.image} />
        <Text style={styles.textWc}>Xin chào !</Text>
        <TextInput
          style={styles.header}
          placeholder="Nhập số điện thoại"
          placeholderTextColor={'white'}
          value={phoneNumber}
          keyboardType="numeric"
          maxLength={10}
          onChangeText={text => setPhoneNumber(text)}
          error={!!phoneNumber.error}
          errorText={phoneNumber.error}></TextInput>
        {error ? (
          <Text style={styles.errorMessage}>Số điện thoại không hợp lệ</Text>
        ) : null}
        <TouchableOpacity
          onPress={() => onLoginPress()}
          style={styles.btnLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            padding: 20,
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
          <View>
            <Text style={{width: 40, textAlign: 'center', color: 'white'}}>
              Or
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
        </View>
        <TouchableOpacity
          onPress={() => onGGLoginPress()}
          style={styles.btnLoginGG}>
          <Text style={styles.btnTextLoginGG}>Đăng nhập với Google</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1B2732',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  textWc: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00B386',
    paddingVertical: 12,
  },
  errorMessage: {
    fontSize: 14,
    color: 'red',
    paddingVertical: 12,
  },
  header: {
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 1,
    width: '90%',
    textAlign: 'center',
    fontSize: 17,
    underlineColor: 'transparent',
    mode: 'outlined',
    backgroundColor: '#1B2732',
    color: 'white',
  },
  btnLogin: {
    backgroundColor: '#00B386',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    mode: 'contained',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
  btnLoginGG: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  btnTextLoginGG: {
    color: '#3897f1',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
});
