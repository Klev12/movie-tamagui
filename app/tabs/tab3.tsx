import { H2,H3 } from "tamagui";
import { MyStack } from "../../components/MyStack";
import CardCharacter from "../../components/CardCharacters";

export default function Tab3() {
  return (
    <MyStack style={{backgroundColor:'white'}}>
      <H2>DASHBOARD</H2>
      <H3>CHARACTER</H3>
      <CardCharacter/>
    </MyStack>
  );
}