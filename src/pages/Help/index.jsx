import React from "react";
import { Image, Modal, Text, View } from "react-native";
import ScannerDemonstration from "../../assets/Scanner.png";
import styles from "./styles";

export default function Help() {
  return (
    <View style={styles.container}>
      <Text style={styles.helpText}>
        Aponte o leitor para o QR Code do lugar que você está visitando, assim
        você terá mais informações sobre ele.
      </Text>
      <Image source={ScannerDemonstration} />
    </View>
  );
}
