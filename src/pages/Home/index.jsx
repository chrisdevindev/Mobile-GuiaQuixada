import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();

  function linkNavigation() {
    navigation.navigate("Login");
  }

  return (
    <>
      <View style={styles.container}>
      <Text>Mapa aqui</Text>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              linkNavigation();
            }}
          >
            <MaterialIcons name="qr-code-scanner" size={55} color="#6ADF22" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.help}
          onPress={() => {
            linkNavigation();
          }}
          >
            <AntDesign name="questioncircleo" size={30} color="#6ADF22" />
            <Text style={styles.helpText}>Ajuda</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Home;
