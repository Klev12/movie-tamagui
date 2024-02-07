import React from 'react';
import { View, Text } from 'react-native';
import { LabelDemo } from "../components/Label";
import { H2, H1, Button } from "tamagui";
import { Star, X } from '@tamagui/lucide-icons'
import { router } from 'expo-router';

export default function Tab2() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 90, alignItems: 'center' }}>
        <Button icon={<X/>}style={{marginLeft:300}} onPress={()=>router.push('/tabs/tab1')}></Button>
      <H1 style={{ marginBottom: 70, marginTop:-50,fontSize: 50 }}>FILMS</H1>
      <LabelDemo/>
      <Button icon={<Star/>} style={{marginTop:30}}> Create Films</Button>
    </View>
  );
}
