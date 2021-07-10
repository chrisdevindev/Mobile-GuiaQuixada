import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Home";
import ScannerCode from "./pages/Scanner";

const { Navigator, Screen } = createStackNavigator();
const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Scanner" component={ScannerCode} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
