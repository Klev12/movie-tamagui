import { H2, H3, Button } from "tamagui";
import { BadgePlus } from '@tamagui/lucide-icons'
import { MyStack } from "../../components/MyStack";
import Card1 from "../../components/Card";

export default function Tab2() {
  return (
    <MyStack style={{backgroundColor:'white'}}>
      <H2>DASHBOARD</H2>
      <H3>FILMS</H3>
      <Card1/>
    </MyStack>
  );
}
