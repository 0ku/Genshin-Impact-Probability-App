import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./About";
import InputBox from "./Inputs";
import { NavButton } from "./Buttons";
const Drawer = createDrawerNavigator();

export default function createAppContainer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: "#4f4f4f",
          width: "55%",
          color: "white",
        }}
        drawerContentOptions={{
          labelStyle: {
            color: "white",
          },
          activeBackgroundColor: "grey",
        }}
      >
        <Drawer.Screen name="Calculator" component={InputBox} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
