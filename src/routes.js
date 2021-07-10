import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Home";
import ScannerCode from "./pages/Scanner/Scanner";

const { Navigator } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Scanner" component={ScannerCode} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
