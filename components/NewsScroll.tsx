import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const NewsScroll = ({image, text, waktu}: any) => {
  return (
    <View>
        <Image source={image} style={tw`w-80 h-40 rounded-lg mt-5`} />
        <View style={tw`w-80`}>
            <Text style={tw`font-bold text-lg mt-2 text-blue-500`}>{text}</Text>
            <Text style={tw`font-light text-sm text-gray-500`}>{waktu}</Text>
        </View>
    </View>
  )
}

export default NewsScroll