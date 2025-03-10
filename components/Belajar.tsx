import { Image, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { AntDesign, Octicons } from '@expo/vector-icons'
import tw from 'twrnc'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'

const Belajar = ({ img, title, deskripsi, color}:any) => {
  const colorScheme = useColorScheme();
  const iconColor = color || (colorScheme === 'dark' ? 'white' : 'black');
  
  return (
    <ThemedView style={tw`w-42 min-h-50 bg-white rounded-lg mt-3`}>
      <Image source={img} style={tw`w-42 h-23 rounded-t-lg`}/>
      <ThemedView style={tw`p-3 justify-between`}>
        <ThemedText style={tw`font-bold`}>{title}</ThemedText>
        <ThemedText style={tw`text-xs text-gray-500`} numberOfLines={3} ellipsizeMode='tail'>{deskripsi}</ThemedText>

        <ThemedView style={tw`flex-row gap-1 items-center`}>
            <ThemedText style={tw`ml-auto`}>Mulai Belajar</ThemedText>
            <AntDesign name='play' color={iconColor} />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  )
}

export default Belajar