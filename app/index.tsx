import { useRouter } from "expo-router";
import {
  Image,
  H1,
  Button,
  Paragraph,
  Separator,
  YGroup,
  YStack,
} from "tamagui";

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";
import {ImageBackground, StyleSheet} from 'react-native';
import { white } from "../utils/colors";

export default function Home() {
  const router = useRouter();

  return (
    <MySafeAreaView>
      <ImageBackground
      source={require('../assets/capitan-america.jpg')}
      style={styles.background}
      >
      <MyStack>
        <YStack
          space="$4"
          maxWidth={600}
          style={styles.textContainer}
        >
          <H1 style={styles.H1}>Capitan America</H1>
          <Paragraph textAlign="center" color="white">
            Steve Rogers "Capitan America", intenta salvar el mundo peleando xd
          </Paragraph>
        </YStack>

        <YStack
          space="$2.5"
          style={styles.buttonContainer}
        >
          <Button onPress={() => router.push("/users/testuser")}>
            Go to a film
          </Button>
          <Button onPress={() => router.push("/tabs")}>Go to tabs page</Button>
        </YStack>

        <YStack
          space="$5"
          style={styles.groupContainer}
        >
          <YGroup
            bordered
            separator={<Separator />}
            theme="green"
          >
            {}
          </YGroup>
        </YStack>
      </MyStack>
      </ImageBackground>
    </MySafeAreaView>
  );
}

const styles = StyleSheet.create({
  H1:{
    color:white,
    paddingBottom:10,
      
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  groupContainer: {
    alignItems: 'center',
  },
  background:{
    flex :1,
    resizeMode:'cover',
    justifyContent:'center',
    alignItems:'center'
  }
});
