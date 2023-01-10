import {View, Text, Button} from 'react-native';
import React from 'react';
import Home from './Home';

export default function SignIn({navigation}) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Home')} title="abc"></Button>
    </View>
  );
}
