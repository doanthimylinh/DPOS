import { View, Text, ScrollView, TouchableOpacity, Dimensions, TextInput, Image, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get("window")
import Ads_Card from './Ads_Card';

export default function Search_Ads() {
    const ads_image = [
        {
            name: "nhap",
            urlImage: require("../data/image/Ads_card.png")
        },
        {
            name: "nhap",
            urlImage: require("../data/image/Ads_card.png")
        },
        {
            name: "nhap",
            urlImage: require("../data/image/Ads_card.png")
        },

    ]
    return (
        <View>
            <View style={{
                position: 'relative',
                left: 0, right: 0,
                alignItems: 'center',
                height: height / 2.1,
            }}>

                {/* background ẩn sau */}
                <View style={{
                    width: width,
                    height: height / 2.7,
                    backgroundColor: '#43bd1e',
                    borderBottomEndRadius: 150,
                    borderBottomStartRadius: 150,
                }} />
                {/* ---------------------------------------------------------------------------------------- */}
                <View style={{
                    position: 'absolute',
                    flexDirection: 'column',
                    width: width,
                    paddingHorizontal: 10,
                }}>
                    {/* ********************* */}
                    {/* Tìm kiếm cửa hàng gần nhất */}
                    <View style={{
                        backgroundColor: 'white',
                        flexDirection: 'row',
                        borderWidth: 1,
                        padding: 2,
                        borderRadius: 10,
                        flex: 9,
                        marginVertical: 10
                    }}>
                        <TouchableOpacity style={{ paddingTop: 10, paddingRight: 10, flex: 1 }}>
                            <MaterialCommunityIcons name='flag' color={'#43bd1e'} size={30} borderWidth={1} backgroundColor={'#43bd1e'} />
                        </TouchableOpacity>

                        <View style={{ paddingHorizontal: 10, borderLeftWidth: 3, borderLeftColor: '#43bd1e', flex: 9 }}>
                            <TextInput placeholder='DPOS gần nhất' style={{ paddingRight: 10 }} />
                        </View>
                    </View>
                    {/* ********************* */}

                    {/* Đặt hàng trực tuyến */}
                    <View style={{
                        backgroundColor: 'yellow',
                        height: 100, borderRadius: 10,
                        flexDirection: 'row',
                        padding: 10, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Image source={require('../data/image/tui_hang.png')} style={{ flex: 1, height: 50, width: 50 }} />
                        <View style={{ flex: 5, paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>Đặt Hàng Trực Tuyến</Text>
                            <Text style={{ color: 'black' }}>Hàng ngàn sản phẩm ưu đãi, Miễn phí vận chuyển</Text>
                        </View>
                        <TouchableOpacity style={{
                            flex: 2,
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'red',
                            padding: 10,
                            borderRadius: 10
                        }}>
                            <MaterialCommunityIcons name='cart-variant' size={40} color={'white'} />
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Đặt Ngay !</Text>
                        </TouchableOpacity>
                    </View>


                    <SafeAreaView
                        style={{ marginTop: 10, ScrollView: true }}

                    >
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={ads_image}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (<Ads_Card ads_image={item} />)}

                        />
                    </SafeAreaView>

                </View>


            </View>


        </View>
    )
}