import React from 'react';
import { View, ImageBackground } from 'react-native';
import { H2, H1, Button } from "tamagui";
import { Star,X } from '@tamagui/lucide-icons'
import { LabelCharacter } from '../components/LabelCharacter';
import { router } from 'expo-router';
import { MyStack } from '../components/MyStack';
import { MySafeAreaView } from '../components/MySafeAreaView';

export default function Characters() {
  return (
    <MySafeAreaView>
    <ImageBackground source={require('../assets/escudo.jpg')} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <MyStack style={{ flex: 1, padding: 90, alignItems: 'center' }}>
        <Button icon={<X/>}style={{marginLeft:300}} onPress={()=>router.push('/tabs/tab3')}></Button>
      <H1 style={{ marginBottom: 20, marginTop:100,fontSize: 32}}>CHARACTER</H1>
      <LabelCharacter/>
      <Button icon={<Star size="$2"/>}> Create Character</Button>
    </MyStack>
    </ImageBackground>
    </MySafeAreaView>
  );
}
