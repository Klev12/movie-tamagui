import { H2, H3, Button } from "tamagui";
import { MyStack } from "../../components/MyStack";
import Card1 from "../../components/Card";

export default function Tab2() {
  return (
    <MyStack style={{backgroundColor:'#4A6786'}}>
      <H2>DASHBOARD</H2>
      <H3>FILMS</H3>
      <Card1/>
    </MyStack>
  );
}
