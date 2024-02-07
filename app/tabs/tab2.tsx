import { MyStack } from "../../components/MyStack";
import CardScene from "../../components/CardScene";
import {H2, H3} from "tamagui";

export default function Tab2() {
  return (
    <MyStack style={{ backgroundColor: "white" }}>
      <H2>DASHBOARD</H2>
      <H3>SCENES</H3>
      <CardScene/>
      
    </MyStack>
  );
};