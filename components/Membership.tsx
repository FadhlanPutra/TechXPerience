import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'twrnc';

const Membership = ({ harga, jangka, cicilan, onPress, selected }: any) => {
  const getHematText = (jangka: string) => {
    if (jangka === '12 Bulan') return 'Hemat 42%';
    if (jangka === '4 Bulan') return 'Hemat 23%';
    if (jangka === '1 Bulan') return 'Hemat 0%';
    return '';
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={tw`mt-5 bg-white shadow-lg rounded-lg p-3 flex-row justify-between items-center ${
          selected ? 'border-2 border-blue-500' : ''
        }`}
      >
        <View style={tw`flex-col justify-between`}>
          <Text style={tw`font-bold`}>{jangka}</Text>
          <Text style={tw`text-gray-500`}>{harga}</Text>
        </View>
        <View style={tw`flex-col justify-between items-end`}>
          {selected && (
            <Text style={tw`-top-4 -right-3 text-white text-xs p-1 bg-blue-500 rounded-xl`}>
              {getHematText(jangka)}
            </Text>
          )}
          <Text style={tw`font-semibold`}>{cicilan}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Membership;
