import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Survey from '@/components/Survey';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import tw from 'twrnc'
import ButtonPrimary from '@/components/ButtonPrimary';

import { OptionSurvey } from '@/constants/data/survey';

const survey = () => {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <SafeAreaView style={tw`mx-5 mt-10 flex-1`}>
        <View>
            <ThemedText style={tw`mb-5`}>Bagaimana kamu tahu tentang TechXPerience?</ThemedText>
            {OptionSurvey.map((item) => ( 
                <Survey key={item.id} title={item.title} selected={selectedOption === item.id} onPress={() => setSelectedOption(item.id)} />
            ))}
        </View>

        <View style={tw`absolute bottom-0 left-0 right-0 mb-5`}>
            <ButtonPrimary title='Selanjutnya' bgBtn='#4285F4' bgText='white' rute='/(tabs)/home' />
        </View>
    </SafeAreaView>
  )
}

export default survey