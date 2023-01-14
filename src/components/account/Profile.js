import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewUpdate}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('UpdateProfile');
          }}>
          <View style={styles.text}>
            <Text style={{fontSize: 18, color: 'red'}}>Cập nhật tài khoản</Text>
            <Text style={{fontSize: 18}}>sdt</Text>
          </View>
          <View style={styles.icon}>
            <SimpleLineIcons name="arrow-right"></SimpleLineIcons>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 80,
    width: '100%',
  },
  viewUpdate: {
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderLeftWidth: 3,
    marginLeft: '3%',
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
