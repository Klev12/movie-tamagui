import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Card, Text } from 'tamagui';
import { Button } from 'tamagui'
import { Pencil, Trash } from '@tamagui/lucide-icons'
import { router } from 'expo-router';

const Card1 = () => {  
  return (
    <View style={styles.container}>
      <Card style={styles.card} onPress={()=>router.push('/tabs/tab2')}>
        <Text style={styles.title}>FILM 1</Text>
        <Text style={styles.paragraph}>DIRECTOR</Text>
        <Text style={styles.paragraph}>TIME</Text>
        <View style={styles.buttonContainer}>
          <Button icon={<Pencil size="$1"/>} style={styles.icon} onPress={()=>router.push('/Films')}></Button>
          <Button icon={<Trash size="$1"/>} style={styles.icon}></Button>
        </View>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.title}>FILM 2</Text>
        <Text style={styles.paragraph}>DIRECTOR</Text>
        <Text style={styles.paragraph}>Time</Text>
        <View style={styles.buttonContainer}>
          <Button icon={<Pencil size="$1" />} style={styles.icon} onPress={() => router.push('/Films')}></Button>
          <Button icon={<Trash size="$1"/>} style={styles.icon}></Button>
        </View>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.title}>FILM 3</Text>
        <Text style={styles.paragraph}>DIRECTOR</Text>
        <Text style={styles.paragraph}>TIME</Text>
        <View style={styles.buttonContainer}>
          <Button icon={<Pencil size="$1"/>} style={styles.icon}></Button>
          <Button icon={<Trash size="$1"/>} style={styles.icon}></Button>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#541219',
    borderRadius:25
  },
  card: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
  },
  icon:{
    width: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent'
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 10,
    marginLeft:210 
  },
});

export default Card1;
