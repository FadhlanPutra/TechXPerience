import BenefitsMemberhip from '@/components/BenefitsMemberhip';
import ButtonPrimary from '@/components/ButtonPrimary';
import Membership from '@/components/Membership';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import { Text, View, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

import { DataBenefits, DataMembership } from '@/constants/data/membership';


const membership = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={tw`flex-1 mt-2`}>

        <View style={tw`mb-5 absolute top-0 left-0 right-0 mt-7 items-center`}>
          <ThemedText style={tw`absolute top-0 right-5 font-bold text-xl`}>X</ThemedText>
          <ThemedText style={tw`font-bold text-xl text-center mt-8`}>
            Start Your 7-Free Trial Today!
          </ThemedText>
          <ThemedText style={tw`text-center`}>
            Buka Fitur Eksklusif dengan TechXPerience Membership
          </ThemedText>
        </View>

        <ScrollView contentContainerStyle={tw`pt-22`} showsVerticalScrollIndicator={false}>
        <ThemedView style={tw`bg-[#d8d8d8] rounded-t-3xl h-full p-5 mt-5`}>
          <Text style={tw`font-bold text-xl text-center`}>Kamu Akan Mendapatkan:</Text>

          <View style={tw`flex-col gap-5 mt-5`}>
            {DataBenefits.map((item, index) => (
              <BenefitsMemberhip key={index} image={item.image} text={item.text} />
            ))}
          </View>

          <View style={tw`flex-col mt-5`}>
            {DataMembership.map((item, index) => (
              <Membership key={item.id} harga={item.harga} jangka={item.jangka} cicilan={item.cicilan} selected={selectedOption === item.id} onPress={() => setSelectedOption(item.id)} />
            ))}
          </View>

          <View style={tw`mt-5`}>
            <ButtonPrimary title='Ikut Kelas' bgBtn='#4285F4' bgText='white' rute='/(tabs)/home' />

            <View style={tw`flex-row justify-evenly mt-1`}>
              <TouchableOpacity>
                <Text style={tw`text-gray-500`}>Terms & Condition</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={tw`text-gray-500`}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ThemedView>
      </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default membership;
