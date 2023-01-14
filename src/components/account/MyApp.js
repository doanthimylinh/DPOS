import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const MyApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textView}>Ứng dụng DPOS</Text>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="local-attraction" color={'#FF6A6A'} size={20} />
        <View style={styles.text}>
          <Text style={{fontSize: 18, color: 'black'}}>Ưu đãi của tôi</Text>
        </View>
        <View style={styles.icon}>
          <SimpleLineIcons name="arrow-right"></SimpleLineIcons>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="hearto" color={'#FF6A6A'} size={20} />
        <View style={styles.text}>
          <Text style={{fontSize: 18, color: 'black'}}>Sản phẩm yêu thích</Text>
        </View>
        <View style={styles.icon}>
          <SimpleLineIcons name="arrow-right"></SimpleLineIcons>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="history" color={'#FF6A6A'} size={20} />
        <View style={styles.text}>
          <Text style={{fontSize: 18, color: 'black'}}>Lịch sử điểm</Text>
        </View>
        <View style={styles.icon}>
          <SimpleLineIcons name="arrow-right"></SimpleLineIcons>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome5 name="receipt" color={'#FF6A6A'} size={20} />
        <View style={styles.text}>
          <Text style={{fontSize: 18, color: 'black'}}>Hóa đơn</Text>
        </View>
        <View style={styles.icon}>
          <SimpleLineIcons name="arrow-right"></SimpleLineIcons>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.text}>
          <Text style={{fontSize: 18, color: 'black', textAlign: 'center'}}>
            Đăng xuất
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MyApp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
  },
  textView: {
    alignItems: 'center',
    padding: 10,
    height: 50,
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#F5F5F5',
  },
  button: {
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
    alignItems: 'center',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    paddingLeft: 10,
    width: '90%',
    fontSize: 20,
  },
  icon: {
    textAlign: 'right',
  },
});
