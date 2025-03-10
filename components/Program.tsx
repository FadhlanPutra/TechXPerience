import { View, Text, useColorScheme, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome, AntDesign, Entypo, EvilIcons, Feather, FontAwesome5, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const Program = ({ text, image}: any) => {
  const colorScheme = useColorScheme();
  const iconColor = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <ThemedView style={tw`rounded-lg flex-col gap-1 justify-center items-center border-r-4 border-[#4285F4] my-2 w-19 h-20 shadow-md`}>
      <Image source={image} style={tw`w-8 h-8`} resizeMode='cover'/>
      <ThemedText style={tw`text-center text-sm font-medium`}>{text}</ThemedText>
    </ThemedView>
  )
}

export default Program