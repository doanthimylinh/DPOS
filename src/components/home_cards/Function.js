import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Function = () => {
    return (
        <View style={{ 
            flexDirection: 'row',
            marginHorizontal: 50, 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginTop: 10}}>
            <TouchableOpacity style={{backgroundColor: '#43bd1e', padding: 10, borderRadius: 40, }}>
                <Ionicons name='card-sharp' color={'white'} size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#43bd1e', padding: 10, borderRadius: 40, }}>
                <MaterialCommunityIcons name='barcode-scan' color={'white'} size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#43bd1e', padding: 10, borderRadius: 40, }}>
                <Ionicons name='newspaper' color={'white'} size={25}  />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#43bd1e', padding: 10, borderRadius: 40, }}>
                <Ionicons name='location' color={'white'} size={25} />
            </TouchableOpacity>

        </View>
    )
}

export default Function