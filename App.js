import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import GetStart from './src/screens/GetStart';

export default function App() {
  // const Stack = createNativeStackNavigator();
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStart"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='GetStart' component={GetStart} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
 
  )
}