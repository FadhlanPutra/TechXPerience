import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Belajar from '@/components/Belajar'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { ThemedText } from '@/components/ThemedText'
import { Entypo } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

import { DataBelajar } from '@/constants/data/home'

const akademi = () => {
  const navigation = useRouter();

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={tw`px-5 mt-5`}>
      <ThemedText style={tw`text-3xl font-bold mb-3`}><Entypo name='book' size={25} />{' '}Akademi</ThemedText>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={tw`flex-row items-center justify-between flex-wrap gap-3`}>
              {DataBelajar.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate('/detail/details')}>
                  <Belajar key={index} title={item.title} deskripsi={item.deskripsi} img={item.img}/>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default akademi