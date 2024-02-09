import React from 'react';
import { View, ImageBackground} from 'react-native';
import { H2, H1, Button,Image } from "tamagui";
import { Star, X} from '@tamagui/lucide-icons'
import { LabelScene } from '../components/LabelScene';
import { router } from 'expo-router';
import { MyStack } from '../components/MyStack';
import { MySafeAreaView } from '../components/MySafeAreaView';

export default function Scenes() {
  return (
    <MySafeAreaView>
      <MyStack style={{backgroundColor:'#4A6786'}}>
        <View style={{ position: 'relative' }}>
          <Button icon={<X size="$4"/>} style={{ position: 'absolute', top: -10, right: -20, backgroundColor: 'transparent', color: 'white' }} onPress={()=> router.push('/tabs/tab2')} />
          <H1 style={{ marginBottom: 20, marginTop: 30, fontSize: 50, color: 'white' }}>SCENES</H1>
        </View>
        <Image
          source={require('../assets/scenes.png')}
          style={{ width: 200, height: 200, marginBottom: 50, marginTop: 20 }}
        />
        <LabelScene />
        <Button icon={<Star size="$2"/>}> Create Scene</Button>
      </MyStack>
    </MySafeAreaView>
  );
}
