import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Account from './Account';
import Hearder from './Hearder';


const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <View>
      <Hearder></Hearder>
      <Text>dvdv</Text>
    </View>
  )
}

export default TabScreens = () => {
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingTop: 10,
          backgroundColor: "white",
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
          paddingBottom: 5,
          fontSize: 10,
          fontWeight: "bold",
        },
        tabBarActiveTintColor: '#43bd1e',
      }}>
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarLabel: "Bán Online",
          tabBarIcon: ({ color, size }) => (
            // <MaterialCommunityIcons name='home' color={color} size={30} />
            <Image style={{width: 30, height: 30}}  source={require('../components/image/acc_ex.png')}/>
          )
        }}
      />
      <Tab.Screen name='Account' component={Account}
        options={{
          tabBarLabel: "Tài Khoản",
          tabBarIcon: ({ color, size }) => (
            // <MaterialIcons name='more-horiz' color={color} size={30} />
            <Image style={{width: 30, height: 30}}  source={require('../components/image/acc_ex.png')}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}