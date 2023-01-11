import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './src/components/SignIn';
import Vertify from './src/components/Vertify';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Vertify">
        {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
        <Stack.Screen name="Vertify" component={Vertify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
