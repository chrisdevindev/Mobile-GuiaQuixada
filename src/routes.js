import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import ScannerCode from "./pages/Scanner";
import InfoDetails from "./pages/Info-Details";
import Help from "./pages/Help";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Details" component={InfoDetails} />
          <Screen name="Home" component={Home} />
          <Screen name="Scanner" component={ScannerCode} />
          <Screen name="Help" component={Help} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default AppStack;
