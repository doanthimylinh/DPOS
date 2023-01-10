
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './components/SignIn';

import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

