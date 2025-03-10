import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Belajar from '@/components/Belajar'
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { ThemedText } from '@/components/ThemedText'
import { Entypo } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const akademi = () => {
  const navigation = useRouter();

  const DataBelajar = [
    { title: "Fundamental Belajar Design", deskripsi: "Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini", img: require('@/assets/images/Desain.jpg')},
    { title: "Fundamental Belajar MySql", deskripsi: "Belajar database tu ga langsung ngoding loh, ada dasar dasanya, belajar disini", img: require('@/assets/images/Mysql.jpg')},
    { title: "Fundamental Belajar Jaringan", deskripsi: "Belajar jaringan tu ga langsung nyambungin kabel, ada dasar dasarnya, belajar disini", img: require('@/assets/images/Jaringan.jpg')},
    { title: "Mahir Menjadi Frontend", deskripsi: "kalo kamu udah jago fundamentalnya yuk kita masuk ke spesialistnya menjadi frontend dev", img: require('@/assets/images/Frontend.png')},
    { title: "Fundamental Belajar Design", deskripsi: "Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini", img: require('@/assets/images/Desain.jpg')},
    { title: "Fundamental Belajar MySql", deskripsi: "Belajar database tu ga langsung ngoding loh, ada dasar dasanya, belajar disini", img: require('@/assets/images/Mysql.jpg')},
    { title: "Fundamental Belajar Jaringan", deskripsi: "Belajar jaringan tu ga langsung nyambungin kabel, ada dasar dasarnya, belajar disini", img: require('@/assets/images/Jaringan.jpg')},
    { title: "Mahir Menjadi Frontend", deskripsi: "kalo kamu udah jago fundamentalnya yuk kita masuk ke spesialistnya menjadi frontend dev", img: require('@/assets/images/Frontend.png')},
  ]

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