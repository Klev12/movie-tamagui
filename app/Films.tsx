import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { LabelDemo } from "../components/Label";
import { H2, H1, Button, Image } from "tamagui";
import { Star, X } from '@tamagui/lucide-icons'
import { router } from 'expo-router';
import { MyStack } from '../components/MyStack';
import { MySafeAreaView } from '../components/MySafeAreaView';

export default function Films() {
  return (
      <MySafeAreaView>
      <MyStack style={{backgroundColor:'#4A6786'}}>
      <Button icon={<X size="$4"/>} style={{ position: 'absolute', top: 10, right: -20, backgroundColor: 'transparent', color: 'white' }} onPress={()=> router.push('/tabs/tab1')} />
          <H1 style={{ marginBottom: 20, marginTop: -60, fontSize: 50, color: 'white' }}>FILMS</H1>
        <LabelDemo />
        <Button icon={<Star size="$2" />} style={{ marginBottom: 30, borderColor: 'red', backgroundColor: 'white', color: 'black' }}> Create Films</Button>
      </MyStack>
      </MySafeAreaView>
  );
}
