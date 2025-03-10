import { FontAwesome, AntDesign, Entypo, EvilIcons, Feather, FontAwesome5, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial } from '@expo/vector-icons';
import React from 'react';
import { Text, View, Image } from 'react-native';
import tw from 'twrnc';


const BenefitsMemberhip = ({image, text}: any) => {


  return (
    <View style={tw`flex-row gap-2 items-center`}>
      <Image source={image} style={tw`w-8 h-8`} resizeMode='cover'/>
      <Text style={tw`text-lg `}>{text}</Text>
    </View>
  );
};

export default BenefitsMemberhip;
