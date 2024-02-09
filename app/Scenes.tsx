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
    <Button icon={<X size="$4"/>} style={{ position: 'absolute', top: 10, right: -20, backgroundColor: 'transparent', color: 'white' }} onPress={()=> router.push('/tabs/tab2')} />
        <H1 style={{ marginTop: 10, fontSize: 50, color: 'white',position:'absolute' }}>SCENES</H1>
      <LabelScene marginTop={-200}/>
      <Button icon={<Star size="$2" />} style={{ marginBottom: 30, borderColor: 'red', backgroundColor: 'white', color: 'black' }} onPress={()=> router.push('/tabs/tab2')}> Create Scene</Button>
    </MyStack>
    </MySafeAreaView>
);
}