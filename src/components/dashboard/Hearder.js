import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
// import Chat from './Chat'
import { useNavigation } from '@react-navigation/native';
export default function Hearder() {
    const navigation = useNavigation();
    return (
        <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', backgroundColor: '#43bd1e', flexDirection: 'row', padding: 10 }}>

            <TouchableOpacity style={{ flex: 5, flexDirection: 'row' }}>
                <Image source={require('../data/image/acc_ex.png')}
                    style={{ width: 50, height: 50 }} />
                <Text style={{ textAlign: 'left', alignSelf: 'center', marginLeft: 5, fontWeight: 'bold', fontSize: 18, color: 'black' }}>Đoàn Kiều Mỹ Ngọc</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'center' }}
                 onPress={() => { navigation.navigate('Chat') }}
            >
                <Ionicons name='chatbubbles-outline' size={30} color={'black'} />
                {/* <Image style={{ width: 30, height: 30 }} source={require('../data/icon/chat_icon.png')} /> */}
            </TouchableOpacity>

        </View>
    )
}