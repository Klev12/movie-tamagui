import { H2,H3 } from "tamagui";
import { MyStack } from "../../components/MyStack";
import CardCharacter from "../../components/CardCharacters";

export default function Tab3() {
  return (
    <MyStack style={{backgroundColor:'#4A6786'}}>
      <H2>DASHBOARD</H2>
      <H3>CHARACTER</H3>
      <CardCharacter/>
    </MyStack>
  );
}