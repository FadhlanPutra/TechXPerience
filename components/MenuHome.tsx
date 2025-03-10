import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons'
import tw from 'twrnc'
import { StyleSheet } from 'react-native';
import { ThemedText } from './ThemedText';
import { useRouter } from 'expo-router';


const MenuHome = ({family, name, size, style, color, text, link = ''}: any) => {
  const colorScheme = useColorScheme();
  const iconColor = color || (colorScheme === 'dark' ? 'white' : 'black');

    const IconComponent =
    family === 'FontAwesome'
      ? FontAwesome
      : family === 'AntDesign'
      ? AntDesign
      : family === 'Entypo'
      ? Entypo
      : family === 'EvilIcons'
      ? EvilIcons
      : family === 'Feather'
      ? Feather
      : family === 'FontAwesome5'
      ? FontAwesome5
      : family === 'Foundation'
      ? Foundation
      : family === 'Ionicons'
      ? Ionicons
      : family === 'MaterialCommunityIcons'
      ? MaterialCommunityIcons
      : family === 'MaterialIcons'
      ? MaterialIcons
      : family === 'Octicons'
      ? Octicons
      : family === 'SimpleLineIcons'
      ? SimpleLineIcons
      : family === 'Zocial'
      ? Zocial
      : null;

    if (!IconComponent) {
      console.error(`Unknown icon family: ${family}`);
      return null;
    }

    const combinedStyle = StyleSheet.flatten([
      tw`p-2 rounded-lg flex-row gap-2 items-center border-l-4 border-[#4285F4] my-2 w-[47%]`,
      style,
    ]);

    const navigation = useRouter();
    

  return (
    <TouchableOpacity style={combinedStyle} onPress={() => navigation.navigate(link)}>
      <IconComponent name={name} size={size} color={iconColor} />
      <ThemedText style={tw``}>{text}</ThemedText>
    </TouchableOpacity>
  )
}

export default MenuHome