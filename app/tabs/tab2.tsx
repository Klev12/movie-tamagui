import { H2,Text } from "tamagui";

import { MyStack } from "../../components/MyStack";
import Card1 from "../../components/Card";

export default function Tab2() {
  return (
    <MyStack style={{backgroundColor:'#413EF1'}}>
      <H2>DASHBOARD</H2>
      <Text>FILMS</Text>
      <Card1/>
    </MyStack>
  );
}
