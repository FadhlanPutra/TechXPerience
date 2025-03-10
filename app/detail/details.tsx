import ButtonPrimary from '@/components/ButtonPrimary';
import Detail from '@/components/DetailComponent';
import { ThemedText } from '@/components/ThemedText';
import { AntDesign } from '@expo/vector-icons';
// import { Video, ResizeMode } from 'expo-av';
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

import { DataDetail } from '@/constants/data/detail';



const details = () => {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={tw`px-5`}>
        <ScrollView>

          {/* <Video
            source={require('@/assets/video/idk.mp4')}
            style={tw`w-full h-full`}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
          /> */}

      {/* {isVideoPlaying ? (
        <Video
          source={require('@/assets/video/idk.mp4')} // Ganti dengan path video Anda
          style={tw`w-full h-56`}
          useNativeControls
          isLooping={false}
          onPlaybackStatusUpdate={(status) => {
            if (status.isLoaded && status.didJustFinish) {
              setIsVideoPlaying(false); // Kembali ke thumbnail setelah video selesai
            }
          }}
        />
      ) : (
        <TouchableOpacity onPress={() => setIsVideoPlaying(true)}>
          <Image
            source={require('@/assets/video/thumbnail.jpg')} // Ganti dengan path thumbnail Anda
            style={tw`w-full h-56`}
            resizeMode="cover"
          />
        </TouchableOpacity>
      )} */}

          <View>
            <Text style={tw`text-blue-500 font-extrabold text-xl`}>Mahir Menjadi Frontend Dev</Text>
            <ThemedText>Bergabung dengan kelas mahir menjadi frontend dev, maka kamu sudah mendapatkan fundamental menjadi seorang programmer, dan pada kelas ini kamu akan mendalami hal itu.</ThemedText>
            <View style={tw`flex-row gap-3 items-center mt-3`}>
              <ThemedText style={tw`text-gray-500`}><AntDesign name='star' color='orange' />4.5 (823)</ThemedText>
              <ThemedText style={tw`text-gray-500`}>4 Module</ThemedText>
              <ThemedText style={tw`text-gray-500`}>Programmer</ThemedText>
            </View>

            <View style={tw`flex-col gap-3 mt-5`}>
              {DataDetail.map((item, index) => (
                <Detail key={index} text={item.text} durasi={item.durasi} image={item.image} />
              ))}      
            </View>

            <ButtonPrimary title="Ikut Kelas" bgBtn='#4285F4' bgText='white' setail={tw`border`} />

          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default details;
