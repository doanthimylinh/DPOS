import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function GetStart() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1}}>
      <ImageBackground
      style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
      source={require('../components/image/bia.png')}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ backgroundColor: '#d6928d', paddingHorizontal: 100, borderRadius: 80 , marginBottom: 50}}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 40, cnolor: 'white' }}>GetStart</Text>
        </TouchableOpacity>
      </ImageBackground>

    </View>
  )
}