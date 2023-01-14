import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Header_home() {
    return (
        <View style={{ padding: 10, flexDirection: 'row' ,backgroundColor: false,backgroundColor: '#43bd1e'}}>

            <View style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                borderWidth: 1,
                padding: 2,
                borderRadius: 10,
                paddingHorizontal: 10,
                flex: 9,
            }}>
                <TouchableOpacity style={{ paddingTop: 10, paddingRight: 10, flex: 1 }}>
                    <MaterialIcons name='search' color={'#43bd1e'} size={30} borderWidth={1} backgroundColor={'#43bd1e'} />
                </TouchableOpacity>

                <View style={{ paddingHorizontal: 10, borderLeftWidth: 3, borderLeftColor: '#43bd1e', flex: 9 }}>
                    <TextInput placeholder='Bạn muốn gì hôm nay !' style={{ paddingRight: 10 }} />
                </View>
            </View>


            <TouchableOpacity style={{ paddingTop: 13, paddingLeft: 10, flex: 1 }}>
                <MaterialCommunityIcons name='cart-outline' size={30} />
            </TouchableOpacity>



        </View>
    )
}