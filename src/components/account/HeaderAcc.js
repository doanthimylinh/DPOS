import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const HeaderAcc = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.textView}>
      <Text style={styles.textHd}>Tài khoản</Text>
      <TouchableOpacity
        style={styles.notify}
        onPress={() => {
          navigation.navigate('Notify');
        }}>
        <Ionicons name="notifications" size={30} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderAcc;

const styles = StyleSheet.create({
  textView: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#43bd1e',
    paddingRight: 20,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
  },
  textHd: {
    textAlign: 'center',
    alignSelf: 'center',
    paddingLeft: '11%',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    width: '90%',
  },
  notify: {
    width: '10%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
