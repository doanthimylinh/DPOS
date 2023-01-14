import { View, Text } from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStart from './src/components/GetStart';
import SignIn from './src/components/authen/SignIn';
import Vertify from './src/components/authen/Vertify';
import TabScreens from './src/components/dashboard/Home';
import Chat from './src/components/dashboard/Chat';
import UpdateProfile from './src/components/account/UpdateProfile';
import ListOrder from './src/components/order/ListOrder'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GetStart"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetStart" component={GetStart} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Vertify" component={Vertify} />
        <Stack.Screen name="TabScreens" component={TabScreens} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen name="ListOrder" component={ListOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
