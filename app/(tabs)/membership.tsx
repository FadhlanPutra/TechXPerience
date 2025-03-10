import BenefitsMemberhip from '@/components/BenefitsMemberhip';
import ButtonPrimary from '@/components/ButtonPrimary';
import Membership from '@/components/Membership';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';


const membership = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const DataBenefits = [
    { image: require('@/assets/images/icon/Modul.png'), text: 'Akses ke semua modul pembelajaran' },
    { image: require('@/assets/images/icon/Jalur.png'), text: 'Jalur pembelajaran yang dirancang oleh mentor' },
    { image: require('@/assets/images/icon/Mentoring.png'), text: 'Mentoring sebulan 4x pertemuan' },
    { image: require('@/assets/images/icon/Trophy.png'), text: 'Mendapatkan sertifikat dan keuntungan lainnya' },
  ]

  const DataMembership = [
    { id: 1, harga: 'Rp 599.000,00', jangka: '12 Bulan', cicilan: 'Rp 12.475,00 / minggu' },
    { id: 2, harga: 'Rp 260.000,00', jangka: '4 Bulan', cicilan: 'Rp 16.250,00 / minggu' },
    { id: 3, harga: 'Rp 85.000,00', jangka: '1 Bulan', cicilan: 'Rp 21.250,00 / minggu' },
  ]

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
              <Text style={tw`text-gray-500`}>Terms & Condition</Text>
              <Text style={tw`text-gray-500`}>Privacy Policy</Text>
            </View>
          </View>

        </ThemedView>
      </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default membership;
