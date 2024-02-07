import React from 'react';
import { View, Text } from 'react-native';
import { H2, H1, Button } from "tamagui";
import { Star,X } from '@tamagui/lucide-icons'
import { LabelCharacter } from '../components/LabelCharacter';
import { router } from 'expo-router';

export default function Tab2() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 90, alignItems: 'center' }}>
        <Button icon={<X/>}style={{marginLeft:300}} onPress={()=>router.push('/tabs/tab3')}></Button>
      <H1 style={{ marginBottom: 20, marginTop:-50,fontSize: 32}}>CHARACTER</H1>
      <LabelCharacter/>
      <Button icon={<Star/>}> Create Character</Button>
    </View>
  );
}
