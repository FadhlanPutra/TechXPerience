import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { ThemedText } from './ThemedText';

const Rekomendasi = ({ text }: any) => {
  const colorScheme = useColorScheme();
  const bgcolor =  colorScheme === 'dark' ? 'white' : 'black';
  return (
      <TouchableOpacity style={[tw`p-1 rounded-md mr-4`, { borderColor: bgcolor, borderWidth: 1 }]}>
        <ThemedText style={tw`p-1`}>{ text }</ThemedText>
      </TouchableOpacity>
  )
}

export default Rekomendasi