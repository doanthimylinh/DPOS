import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/dashboard/Home'
import GetStart from './src/components/GetStart'
import SignIn from './src/components/authen/SignIn'
import Vertify from './src/components/authen/Vertify'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStart"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='GetStart' component={GetStart} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='Vertify' component={Vertify} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
 
  )
}