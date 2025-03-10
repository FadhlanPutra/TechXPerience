import React from 'react';
import { Text, View, Image } from 'react-native';
import tw from 'twrnc';


const Detail = ({image, text, durasi}: any) => {
  return (
    <View style={tw`mt-5 flex-row gap-3`}>
        <Image source={image} style={tw`w-29 h-29 rounded-md`} />
        <View style={tw`flex-col justify-between my-1`}>
            <Text style={tw`font-bold text-blue-500 text-lg flex-wrap w-60`}>{text}</Text>
            <Text style={tw`text-gray-500 text-sm`}>{durasi}</Text>
        </View>
    </View>
  );
};

export default Detail;
