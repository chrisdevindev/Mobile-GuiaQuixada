import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { StyledMap } from "./mapStyle";

import styles from "./styles";

function Home() {
  const navigation = useNavigation();

  function linkNavigation() {
    navigation.navigate("Login");
  }

  function navigateToHelp(){
    navigation.navigate("Help");
  }

  return (
    <>
      <View style={styles.container}>
        <Text>Mapa aqui</Text>

        <MapView
          customMapStyle={StyledMap}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -4.973660,
            longitude: -39.013731,
            longitudeDelta: 0.008,
            latitudeDelta: 0.008,
          }}
        />

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              linkNavigation();
            }}
          >
            <MaterialIcons name="qr-code-scanner" size={55} color="#6ADF22" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.help}
            onPress={() => {
              linkNavigation();
            }}
          >
            <AntDesign name="questioncircleo" size={30} color="#6ADF22"  onPress={() => navigateToHelp()}/>
            <Text style={styles.helpText}>Ajuda</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Home;
