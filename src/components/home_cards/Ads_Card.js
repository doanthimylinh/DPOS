import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window")

export default function Ads_Card(props) {
  const { urlImage } = props.ads_image
  return (
    <View
      style={{ marginRight: 10,borderRadius: 30, borderWidth: 2 }}
    >
      <TouchableOpacity>
        <Image
          style={{ height: 147, width: width - 25, borderRadius: 30 }}
          source={urlImage} />
      </TouchableOpacity>

    </View>
  )
}