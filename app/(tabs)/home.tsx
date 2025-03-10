import { View, Text, Image, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from '@/components/Icon'
import tw, { style } from 'twrnc'
import { ThemedText } from '@/components/ThemedText'
import MenuHome from '@/components/MenuHome'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import Belajar from '@/components/Belajar'
import ScrollEvent from '@/components/ScrollEvent'
import { useNavigation, useRouter } from 'expo-router'
import Program from '@/components/Program'



const home = () => {
  const navigation = useRouter();
    const colorScheme = useColorScheme();
    const urlImage = colorScheme === 'dark' ? require('@/assets/images/Logo_Terang.png') : require('@/assets/images/Logo_Gelap.png');

  const ModulData = [
    {family: 'FontAwesome', name: 'graduation-cap', text: 'Modul Akademi'},
    {family: 'FontAwesome', name: 'group', text: 'Community'},
    {family: 'Entypo', name: 'ticket', text: 'Event Hackaton'},
    {family: 'Entypo', name: 'chat', text: 'Chat CS'},
  ]

  const DataBelajar = [
    { title: "Fundamental Belajar Design", deskripsi: "Belajar design tu ga langsung gambar aja tau ada dasar dasarnya, belajar disini", img: require('@/assets/images/Desain.jpg')},
    { title: "Fundamental Belajar MySql", deskripsi: "Belajar database tu ga langsung ngoding loh, ada dasar dasanya, belajar disini", img: require('@/assets/images/Mysql.jpg')},
    { title: "Fundamental Belajar Jaringan", deskripsi: "Belajar jaringan tu ga langsung nyambungin kabel, ada dasar dasarnya, belajar disini", img: require('@/assets/images/Jaringan.jpg')},
    { title: "Mahir Menjadi Frontend", deskripsi: "kalo kamu udah jago fundamentalnya yuk kita masuk ke spesialistnya menjadi frontend dev", img: require('@/assets/images/Frontend.png')},
  ]

  const DataScrollEvent = [
    { text: "Hackaton" },
    { text: "Design Web" },
    { text: "Workshop" },
    { text: "Lomba" },
    { text: "Hackaton" },
    { text: "Hackaton" },
    { text: "Hackaton" },
    { text: "Hackaton" },
  ]

  const DataImage = [
    { img: require('@/assets/images/Banner.png') },
    { img: require('@/assets/images/Banner.png') },
    { img: require('@/assets/images/Banner.png') },
    { img: require('@/assets/images/Banner.png') },
  ]

  const DataProgram = [
    { image: require('@/assets/images/icon/Investment.png'), text: "TechXPerience Career" },
    { image: require('@/assets/images/icon/Transfer.png'), text: "Pengembangan Usaha" },
    { image: require('@/assets/images/icon/Money-bag.png'), text: "Beasiswa Kuliah" },
    { image: require('@/assets/images/icon/Accounting.png'), text: "TechXPerience Roadmap" },
    ]


  return (
    <GestureHandlerRootView>
      <SafeAreaView style={tw`px-5`}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row justify-between`}>
            <Image source={urlImage} style={tw`w-45% h-10`} resizeMode='cover' />
            <View style={tw`flex-row`}>
                <Icon family='Feather' name='search' size={24} />
                <Icon family='AntDesign' name='message1' size={24} />
                <Icon family='AntDesign' name='user' size={24} />
            </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-5`}>
          <View style={tw`flex-row gap-3`}>
            <Image source={require('@/assets/images/Banner.png')} style={tw`w-80 h-50 rounded-lg`} />
            <Image source={require('@/assets/images/Banner.png')} style={tw`w-80 h-50 rounded-lg`} />
            <Image source={require('@/assets/images/Banner.png')} style={tw`w-80 h-50 rounded-lg`} />
            <Image source={require('@/assets/images/Banner.png')} style={tw`w-80 h-50 rounded-lg`} />
          </View>
        </ScrollView>

        <View style={tw`flex-row flex-wrap justify-between mt-5`}>
            {ModulData.map((item, index) => ( 
                <MenuHome key={index} family={item.family} name={item.name} text={item.text} />
            ))}
        </View>

        <View style={tw`flex-row justify-between my-3`}>
          <ThemedText><Entypo name='book' />{' '}Mau belajar apa hari ini</ThemedText>
          <TouchableOpacity>
            <ThemedText onPress={ () => navigation.navigate('/(tabs)/akademi')}>Lihat Semua</ThemedText>
          </TouchableOpacity>
        </View> 

        <View style={tw`flex-row items-center justify-between flex-wrap gap-3`}>
          {DataBelajar.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('/detail/details')}>
              <Belajar key={index} title={item.title} deskripsi={item.deskripsi} img={item.img}/>
            </TouchableOpacity>
          ))}
        </View>

        <View style={tw`flex-row justify-between my-3`}>
          <ThemedText><MaterialIcons name='event-note' />{' '}Ikuti Event Terdekat</ThemedText>
          <TouchableOpacity>
            <ThemedText>Lihat Semua</ThemedText>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-3`}>
          <View style={tw`flex-row items-center justify-between flex-wrap gap-3`}>
            {DataScrollEvent.map((item, index) => (
              <TouchableOpacity key={index}>
                <ScrollEvent key={index} text={item.text} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-5`}>
          <View style={tw`flex-row items-center justify-between flex-wrap gap-3`}>
            {DataImage.map((item, index) => (
              <TouchableOpacity key={index}>
                <Image key={index} source={item.img} style={tw`w-80 h-50 rounded-lg`} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`mt-5`}>
          <View style={tw`flex-row items-center justify-between flex-wrap gap-3`}>
            {DataImage.map((item, index) => (
              <TouchableOpacity key={index}>
                <Image key={index} source={item.img} style={tw`w-80 h-50 rounded-lg`} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View style={tw`flex-row justify-between my-3`}>
          <ThemedText><MaterialIcons name='event-note' />{' '}Program TechXPerience</ThemedText>
          <TouchableOpacity>
            <ThemedText>Lihat Semua</ThemedText>
          </TouchableOpacity>
        </View>

          <View style={tw`flex-row items-center justify-between flex-wrap gap-3`}>
            {DataProgram.map((item, index) => (
              <TouchableOpacity key={index}>
                <Program key={index} text={item.text} image={item.image}/>
              </TouchableOpacity>
            ))}
          </View>


        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default home