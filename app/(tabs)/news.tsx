import { View, Text, TextInput, useColorScheme } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons'
import NewsScroll from '@/components/NewsScroll'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import News from '@/components/News'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

const news = () => {
    const colorScheme = useColorScheme();
    const iconColor = colorScheme === 'dark' ? '#ADD8E6' : 'black';

  const DataScroll = [
    {
      image: require('@/assets/images/Berita.png'),
      text: 'India ingin sebar developernya ke seluruh dunia, dengan bayaran murah',
      waktu: '23 Feb 2025'
    },
    {
      image: require('@/assets/images/Berita.png'),
      text: 'India ingin sebar developernya ke seluruh dunia, dengan bayaran murah',
      waktu: '23 Feb 2025'
    },
    {
      image: require('@/assets/images/Berita.png'),
      text: 'India ingin sebar developernya ke seluruh dunia, dengan bayaran murah',
      waktu: '23 Feb 2025'
    },
    {
      image: require('@/assets/images/Berita.png'),
      text: 'India ingin sebar developernya ke seluruh dunia, dengan bayaran murah',
      waktu: '23 Feb 2025'
    },
    {
      image: require('@/assets/images/Berita.png'),
      text: 'India ingin sebar developernya ke seluruh dunia, dengan bayaran murah',
      waktu: '23 Feb 2025'
    },
  ]

  const DataNews = [
    {
      image: require('@/assets/images/Berita.png'),
      text: 'India ingin sebar developernya ke seluruh dunia, dengan bayaran murah',
      waktu: '23 Feb 2025'
    },
    {
      image: require('@/assets/images/Berita.png'),
      text: 'India ingin sebar developernya ke seluruh dunia, dengan bayaran murah',
      waktu: '23 Feb 2025'
    },
    {
      image: require('@/assets/images/Berita.png'),
      text: 'India ingin sebar developernya ke seluruh dunia, dengan bayaran murah',
      waktu: '23 Feb 2025'
    },
    {
      image: require('@/assets/images/Berita.png'),
      text: 'India ingin sebar developernya ke seluruh dunia, dengan bayaran murah',
      waktu: '23 Feb 2025'
    },
    {
      image: require('@/assets/images/Berita.png'),
      text: 'India ingin sebar developernya ke seluruh dunia, dengan bayaran murah',
      waktu: '23 Feb 2025'
    },
  ]

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={tw`px-5`}>
          <ScrollView showsVerticalScrollIndicator={false}>
            
          <View>
            <ThemedText style={tw`font-boldThemed text-2xl`}>News</ThemedText>
          </View>

          <View style={tw`mt-3 flex`}>
            <TextInput style={[tw`rounded-lg p-3`, {borderColor: iconColor, borderWidth: 1}]} placeholder='Mau cari berita apa hari ini?' placeholderTextColor={iconColor}/>
            <AntDesign name='search1' style={tw`absolute right-3 top-2`} size={24} color={iconColor} />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-5`}>
            <View style={tw`flex-row gap-3`}>
              {DataScroll.map((item, index) => (
                <NewsScroll key={index} text={item.text} waktu={item.waktu} image={item.image} />
              ))}      
            </View>
          </ScrollView>

          <View style={tw`flex-col gap-3`}>
            {DataNews.map((item, index) => (
              <News key={index} text={item.text} waktu={item.waktu} image={item.image} />
            ))}      
          </View>



          </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default news