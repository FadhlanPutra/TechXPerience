import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import ButtonPrimary from '@/components/ButtonPrimary'
import { AntDesign, EvilIcons, FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { ThemedText } from '@/components/ThemedText'
import Checkbox from 'expo-checkbox'
import Icon from '@/components/Icon'

const Login = () => {
  const navigation = useRouter();
  const [isChecked, setChecked] = useState(false);

  const colorScheme = useColorScheme();
  const urlImage = colorScheme === 'dark' ? require('@/assets/images/Logo_Terang.png') : require('@/assets/images/Logo_Gelap.png');
  
  return (
      <SafeAreaView style={tw`mx-5 mt-20`}>
      <View>
        <Image source={urlImage} style={tw`w-45% h-10`} resizeMode='cover' />
      </View>

      <View style={tw`my-2 mt-3`}>
        <TextInput style={tw`w-full rounded-lg bg-gray-300 my-2 py-3 pl-1`} placeholder='Masukan Email' />
        <TextInput style={tw`w-full rounded-lg bg-gray-300 my-2 py-3 pl-1`} secureTextEntry placeholder='Masukan Password' />
      </View>

      <View style={tw`flex-row justify-between my-4`}>
       <View style={tw`flex-row items-center`}>

          <Checkbox
            style={tw`border-neutral-700`}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />

          <ThemedText style={tw`ml-2 text-sm`}>Ingat aku</ThemedText>
        </View>

        <TouchableOpacity>
          <ThemedText style={tw`text-sm text-gray-400 text-right`}>Lupa Password?</ThemedText>
        </TouchableOpacity>
      </View>

      <ButtonPrimary title="Login" bgBtn="#4285F4" bgText="white" rute="/(tabs)/home" />
      
      <View style={tw`flex flex-row justify-center mt-2`}>
        <ThemedText style={tw`text-sm text-center text-gray-400`}>Belum Punya Akun? </ThemedText>
        <TouchableOpacity onPress={ () => navigation.navigate('/auth/register')}>
          <ThemedText style={tw`text-sm text-center text-blue-500`}>Daftar</ThemedText>
        </TouchableOpacity>
      </View>
      <ThemedText style={tw`text-sm text-gray-400 text-center mt-10`}>Atau Masuk Menggunakan</ThemedText>
      <View style={tw`border-b border-gray-500 mt-3`}></View>

      <View style={tw`flex flex-col justify-center my-3`}>
        <ButtonPrimary title='Masuk dengan Google' family='FontAwesome' name='google' size={25} bgBtn='white' setail={tw`shadow-lg`} rute="/(tabs)/home" />
        <ButtonPrimary title='Masuk dengan Facebook' family='FontAwesome' name='facebook' size={25} bgBtn='white' setail={tw`shadow-lg`} rute="/(tabs)/home" />
      </View>

    </SafeAreaView>
  )
}

export default Login;
