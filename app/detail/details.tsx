// import ButtonPrimary from '@/components/ButtonPrimary';
// import Detail from '@/components/DetailComponent';
// import { ThemedText } from '@/components/ThemedText';
// import { AntDesign } from '@expo/vector-icons';
// import { useVideoPlayer, VideoView } from 'expo-video';
// import React, { useState } from 'react';
// import { Text, View, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
// import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import tw from 'twrnc';

// import { DataDetail } from '@/constants/data/detail';
// import { useEvent } from 'expo';



// const details = () => {
//   const videoSource =
//   'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

//   const player = useVideoPlayer(videoSource, player => {
//     player.loop = true;
//     player.play();
//   });

//   const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  
//   // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

//   return (
//     <GestureHandlerRootView>
//       <SafeAreaView style={tw`px-5`}>
//         <ScrollView>

//         <View style={styles.controlsContainer}>
//         <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
//         <View style={styles.controlsContainer}>
//         <Button
//           title={isPlaying ? 'Pause' : 'Play'}
//           onPress={() => {
//             if (isPlaying) {
//               player.pause();
//             } else {
//               player.play();
//             }
//           }}
//         />
//         </View>
//         </View>

//           <View>
//             <Text style={tw`text-blue-500 font-extrabold text-xl`}>Mahir Menjadi Frontend Dev</Text>
//             <ThemedText>Bergabung dengan kelas mahir menjadi frontend dev, maka kamu sudah mendapatkan fundamental menjadi seorang programmer, dan pada kelas ini kamu akan mendalami hal itu.</ThemedText>
//             <View style={tw`flex-row gap-3 items-center mt-3`}>
//               <ThemedText style={tw`text-gray-500`}><AntDesign name='star' color='orange' />4.5 (823)</ThemedText>
//               <ThemedText style={tw`text-gray-500`}>4 Module</ThemedText>
//               <ThemedText style={tw`text-gray-500`}>Programmer</ThemedText>
//             </View>

//             <View style={tw`flex-col gap-3 mt-5`}>
//               {DataDetail.map((item, index) => (
//                 <Detail key={index} text={item.text} durasi={item.durasi} item={item.image} />
//               ))}      
//             </View>

//             <ButtonPrimary title="Ikut Kelas" bgBtn='#4285F4' bgText='white' setail={tw`border`} />

//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// }

// export default details;



import ButtonPrimary from '@/components/ButtonPrimary';
import Detail from '@/components/DetailComponent';
import { ThemedText } from '@/components/ThemedText';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { View, Button, SafeAreaView, ScrollView, Text } from 'react-native';
import tw from 'twrnc';
import { DataDetail } from '@/constants/data/detail';
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useCallback, useEffect, useRef } from 'react';


const details = () => {
  const videoRef = useRef(null);
  
  const videoSource = require('@/assets/video/idk.mp4');
  const player = useVideoPlayer(videoSource, (playerInstance) => {
    playerInstance.loop = false;
  });



  return (
    <SafeAreaView style={tw`px-5`}>
      <ScrollView>
        <View style={tw``}>
          <VideoView ref={videoRef} style={tw`w-[350px] h-[275px]`} player={player} allowsFullscreen />

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
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}


export default details;
