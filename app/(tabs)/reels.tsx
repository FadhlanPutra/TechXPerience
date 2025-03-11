import React, { useState, useRef, useEffect } from 'react';
import { View, FlatList, Dimensions, Text } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';
import tw from 'twrnc';
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

const videos = [
  { id: '1', source: require('@/assets/video/idk.mp4') },
  { id: '2', source: require('@/assets/video/idk.mp4') },
  { id: '3', source: require('@/assets/video/idk.mp4') },
  { id: '4', source: require('@/assets/video/idk.mp4') },
  { id: '5', source: require('@/assets/video/idk.mp4') },
  { id: '6', source: require('@/assets/video/idk.mp4') },
];

const VideoItem = ({ video, isActive }: any) => {
  const player = useVideoPlayer(video.source, (playerInstance) => {
    playerInstance.loop = true;
  });

  useEffect(() => {
    if (isActive) {
      player.play();
    } else {
      player.pause();
    }
  }, [isActive]);

  return (
    <View style={{ width, height, backgroundColor: 'black' }}>
      <VideoView
        player={player}
        style={tw`w-full h-full`}
        allowsFullscreen
        contentFit="cover"
      />
    </View>
  );
};

const ReelsScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems && viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 80,
  };

  return (
    <FlatList
      data={videos}
      renderItem={({ item, index }) => (
        <View style={{ width, height }}>
          <VideoItem video={item} isActive={index === activeIndex} />
          <View style={tw`absolute right-5 top-[${height / 2 - -80}px] space-y-4 gap-4`}>
            <AntDesign name="hearto" size={30} color="white" />
            <FontAwesome name="comment-o" size={30} color="white" />
            <Entypo name="paper-plane" size={30} color="white" />
            <Feather name="bookmark" size={30} color="white" />
          </View>
          <View style={tw`absolute bottom-10 left-5`}>
            <Text style={tw`text-white font-bold text-xl`}>
              Kamu akan mendapatkan:
            </Text>
            <Text style={tw`text-white mt-2 `}>
              Mendapatkan sertifikat dan keuntungan lainnya
            </Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
      pagingEnabled
      decelerationRate="normal"
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
    />
  );
};

export default ReelsScreen;
