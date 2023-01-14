import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {useNavigation} from '@react-navigation/native';

const OrderHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ListOrder', {key: 4});
        }}>
        <Foundation
          name="clipboard-notes"
          size={20}
          color={'#FF6A6A'}></Foundation>
        <View style={styles.text}>
          <Text style={{fontSize: 18, color: 'black'}}>Lịch sử đơn hàng</Text>
        </View>
        <View style={styles.icon}>
          <SimpleLineIcons name="arrow-right"></SimpleLineIcons>
        </View>
      </TouchableOpacity>

      
      <View style={styles.viewHis}>
        <TouchableOpacity
          style={styles.hisOdr}
          onPress={() => {
            navigation.navigate('ListOrder', {key: 1});
          }}>
          <Image
            source={require('../data/icon/checklist.png')}
            style={styles.hisImage}></Image>
          <Text>Đã xác nhận</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.hisOdr}
          onPress={() => {
            navigation.navigate('ListOrder', {key: 2});
          }}>
          <Image
            source={require('../data/icon/delivery-man.png')}
            style={styles.hisImage}></Image>
          <Text>Đang xử lý</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.hisOdr}
          onPress={() => {
            navigation.navigate('ListOrder', {key: 3});
          }}>
          <Image
            source={require('../data/icon/fast-delivery.png')}
            style={styles.hisImage}></Image>
          <Text>Đang giao hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderHistory;
const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    height: 35,
  },
  text: {
    paddingLeft: 10,
    width: '90%',
    fontSize: 20,
  },
  icon: {
    textAlign: 'right',
    paddingRight: 10,
  },
  hisImage: {
    width: 50,
    height: 50,
  },
  hisOdr: {
    backgroundColor: 'white',
    width: 120,
    alignItems: 'center',
  },
  viewHis: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
});
