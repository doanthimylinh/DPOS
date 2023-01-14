import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import data from '../data/data';

const UpdateProfile = () => {
  const navigation = useNavigation();

  const [countryData, setCountryData] = useState([]);
//-----------
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [stateName, setStateName] = useState(null);
  const [cityName, setCityName] = useState(null);

  //--------
  const [isFocus, setIsFocus] = useState(false);


  const data1 = [data.name]
  console.log(data1)

  //ngọc
  const [value, setValue] = useState(null);
  const renderLabel = (props) => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          {props}
        </Text>
      );
    }
    return null;
  };
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.viewHis}>
          <TouchableOpacity style={styles.hisOdr}>
            <AntDesign
              name="arrowleft"
              size={30}
              color={'black'}
              onPress={() => {
                navigation.navigate('Account');
              }}></AntDesign>
          </TouchableOpacity>
          <Text style={styles.viewText}>Tài khoản của bạn</Text>
        </View>
        <View style={styles.viewInput}>
          <View style={styles.labelContainer}>
            <Text style={{ fontSize: 15 }}>Tên</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}>Linh</TextInput>
          </View>
        </View>
        <View style={styles.viewInput}>
          <View style={styles.labelContainer}>
            <Text style={{ fontSize: 15 }}>Email</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}>Linh@gmail.com</TextInput>
          </View>
        </View>
        <View style={styles.viewInput}>
          <View style={styles.labelContainer}>
            <Text style={{ fontSize: 15 }}>Số điện thoại</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}>0329852147</TextInput>
          </View>
        </View>
        <View>
          {renderLabel('Tỉnh Thành')}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}

            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            //nháp
            data={data}
            // search
            maxHeight={200}
            labelField="name"
            valueField="code"
            placeholder={!isFocus ? 'Tỉnh thành' : '...'}
            searchPlaceholder="Search..."

            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setCountry(item.name);
              console.log(item)
              // handleState(item.value);
              setCountryName(item.label);
              setIsFocus(false);
            }}
          />
        </View>

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}

          data={countryData}
          search
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Quận/huyện' : '...'}
          searchPlaceholder="Search..."
          value={country}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          // inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={countryData}
          search
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Phường/xã' : '...'}
          // searchPlaceholder="Search..."
          value={country}
        />
        <View style={styles.viewInput}>
          <View style={styles.labelContainer}>
            <Text style={{ fontSize: 15 }}>Số nhà - Tên đường</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}>127B</TextInput>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.text}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  viewText: {
    textAlign: 'center',
    fontSize: 20,
    width: '90%',
    paddingRight: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  viewHis: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    height: 50,
  },
  hisOdr: {
    width: '10%',
  },
  viewInput: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 50,
  },
  labelContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 3,
    marginStart: 25,
    zIndex: 1,
    shadowColor: 'white',
    position: 'absolute',
    top: -12,
    fontSize: 50,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 50,
    zIndex: 0,
    textAlign: 'center',
  },
  textInput: { fontSize: 19, color: 'black', textAlign: 'center' },
  button: {
    marginTop: 20,
    backgroundColor: '#43bd1e',
    borderRadius: 50,
    height: 50,
    width: '28%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  // dropdown
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 15,
    backgroundColor: 'white',
    paddingHorizontal: 3,
    marginStart: 25,
    zIndex: 1,
    shadowColor: 'white',
    position: 'absolute',
    top: -17,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    marginLeft: '90%',
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    width: 100,
    fontSize: 16,
  },
});
