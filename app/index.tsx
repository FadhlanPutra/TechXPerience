import { View, Text, Image, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ThemedText } from '@/components/ThemedText'
import ButtonPrimary from '@/components/ButtonPrimary'
import { Fontisto } from '@expo/vector-icons'
import Survey from '@/components/Survey'

const index = () => {
  const colorScheme = useColorScheme();
  const borderColor = colorScheme === 'dark' ? 'blue' : 'black';
  const urlImage = colorScheme === 'dark' ? require('@/assets/images/Logo_Terang.png') : require('@/assets/images/Logo_Gelap.png');

  return (
    <SafeAreaView style={tw`mx-7 inset-x-0 bottom-0 absolute`}>
        <View>
            <View style={tw`items-center mb-20`}>
                <Image source={urlImage} style={tw`w-80 h-20`} resizeMode='cover' />
            </View>
            <View style={tw`mb-30`}>

                <ThemedText style={tw`font-bold text-lg text-center`}>Belajar Technology & Dapatkan Pengalamannya</ThemedText>
                <ThemedText style={tw`text-sm text-gray-400 text-center`}>Belajar di Techxperience ini kamu dapat belajar berbagai bidang teknologi seperti pemrograman, desain grafis, dan jaringan.</ThemedText>
            </View>
            <ButtonPrimary title="Mulai Belajar Sekarang" setail={[tw`border`, {borderColor: borderColor}]} rute="/(tabs)/home" />
            <ButtonPrimary title="Masuk" rute="auth/login" setail={tw`bg-[#4285F4]`} bgText='white' />
            <ThemedText style={tw`text-center text-xs font-light`}>#Dari 1 Baris Pertama, Sampai 1 Project Pertama</ThemedText>
        </View>

    </SafeAreaView>
  )
}

export default index