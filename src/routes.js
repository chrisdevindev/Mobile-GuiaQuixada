import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Home from "./pages/Home";
import ScannerCode from "./pages/Scanner";
import InfoDetails from "./pages/Info-Details";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
        <Screen name="Scanner" component={ScannerCode} />
        <Screen name="InfoDetails" component={InfoDetails} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
