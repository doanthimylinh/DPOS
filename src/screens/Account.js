import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDeign } from 'react-native-vector-icons/AntDesign'
import Hearder from './Hearder'
export default function Account() {
    return (
        <View style={{ flex: 1 }}>
           <Hearder></Hearder>
            <Text>Account</Text>
        </View>
    )
}