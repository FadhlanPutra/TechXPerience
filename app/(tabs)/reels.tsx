import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import tw from 'twrnc';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const reels = () => {
    const colorScheme = useColorScheme();
    const bgColor = colorScheme === 'dark' ? '#ADD8E6' : 'black';
    
  return (
    <SafeAreaView style={tw`px-5`}>
      <ThemedView style={tw``}>
        <ThemedView style={tw`mt-3 flex`}>
          <TextInput style={[tw`rounded-lg p-3 pl-1`, {borderColor: bgColor, borderWidth: 1}]} placeholder='For Your Page' placeholderTextColor={bgColor}/>
          <AntDesign name='search1' style={tw`absolute right-3 top-2`} size={24} color={bgColor} />
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default reels;
