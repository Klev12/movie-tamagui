import { MyStack } from "../../components/MyStack";
import CardScene from "../../components/CardScene";
import {H2, H3} from "tamagui";

export default function Tab2() {
  return (
    <MyStack style={{ backgroundColor: "#4A6786" }}>
      <H2>DASHBOARD</H2>
      <H3>SCENES</H3>
      <CardScene/>
      
    </MyStack>
  );
};