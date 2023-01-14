import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HeaderAcc from '../account/HeaderAcc';
import Profile from '../account/Profile';
import OrderHistory from '../account/OrderHistory';
import MyApp from '../account/MyApp';
export default function Account() {
  return (
    <View>
      <HeaderAcc></HeaderAcc>
      <ScrollView>
        <Profile></Profile>
        <OrderHistory></OrderHistory>
        <MyApp></MyApp>
      </ScrollView>
    </View>
  )
}