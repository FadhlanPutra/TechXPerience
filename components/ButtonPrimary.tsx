import { View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import tw from 'twrnc';
import React from 'react';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ThemedText } from './ThemedText';

const ButtonPrimary = ({ title, bgBtn, rute = '', setail, family, size, iconColor, name }: any) => {
  const navigation = useRouter();
  const colorScheme = useColorScheme();
  const bgColor = colorScheme === 'dark' ? 'white' : 'black';
  const borderColor = colorScheme === 'dark' ? '#333333' : '#cccccc';
  
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


  return (
    <TouchableOpacity
      style={[
        tw`px-5 py-3 rounded-lg my-2`,
        { backgroundColor: bgBtn, borderColor: borderColor, width: '100%' },
        setail,
      ]}
      onPress={() => navigation.navigate(rute)}
    >
        <View style={tw`flex-row items-center justify-center gap-2`}>
          {IconComponent && (
              <IconComponent name={name} size={size} color={iconColor} />
          )}
        <Text style={[tw`text-center text-lg`, { color: bgColor }]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
