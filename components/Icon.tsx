import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons'
import tw from 'twrnc'
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';


const Icon = ({family, name, size, style, color, rute = ''}: any) => {
  const theme = useColorScheme(); // light or dark
  const navigation = useRouter();

  // Warna ikon default berdasarkan tema
  const iconColor = color || (theme === 'dark' ? 'white' : 'black');

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
      tw`p-2 rounded-lg mx-1`,
      style, // Gaya tambahan dari luar
    ]);

  return (
    <TouchableOpacity style={combinedStyle}>
      <IconComponent name={name} size={size} color={iconColor} onPress={() => navigation.navigate(rute)}/>
    </TouchableOpacity>
  )
}

export default Icon