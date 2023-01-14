import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Account from './Account';
import Hearder from './Hearder';
import Cart from './Cart';
import Notify from './Notify';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Promotion from './Promotion';
import Header_home from '../home_cards/Header_home';
import { TextInput } from 'react-native-gesture-handler';
import Search_Ads from '../home_cards/Search_Ads';
const { width, height } = Dimensions.get("window")
import Function from '../home_cards/Function';
import Event from '../home_cards/Event';

const Tab = createBottomTabNavigator();
const HomePage = () => {
  return (
    <View>
      <Header_home></Header_home>
      <ScrollView>
        <Search_Ads></Search_Ads>
        <Function></Function>
        <Event></Event>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>
        <Text>ddvd</Text>

      </ScrollView>




    </View>

  );
};
export default TabScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 65,
          paddingTop: 5,
          backgroundColor: 'white',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
          paddingBottom: 5,
          fontSize: 10,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#43bd1e',

      }}

    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          
          tabBarLabel: 'Trang Chủ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Promotion"
        component={Promotion}
        options={{
          tabBarLabel: 'Khuyến Mãi',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='local-attraction' color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
              }}
            >
              <MaterialIcons name='shopping-cart' color={color} size={30} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notify"
        component={Notify}
        options={{
          tabBarLabel: 'Thông Báo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='bell' color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Tài Khoản',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='more-horiz' color={color} size={30} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};
