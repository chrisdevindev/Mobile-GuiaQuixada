import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "../Info-Details/styles";
import imgLeao from "../../assets/leao.png";
import imgNatal from "../../assets/natal.png";

function InfoDetails() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topText}>Detalhes</Text>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.details}>
            <Text style={styles.title}>
              Praça José de Barros (Praça do Leão)
            </Text>

            <Image style={styles.imgLeao} source={imgLeao} />

            <Text style={styles.description}>
              Da nostalgia à folia, a Praça José de Barros, também popularmente
              conhecida como Praça do Leão, é considerada pelo povo quixadaense
              o mais tradicional ponto de encontro da região, também palco de
              marcantes momentos históricos da cidade, desde a época dos
              coronéis às animadas festas populares.
            </Text>

            <Image style={styles.imgNatal} source={imgNatal} />

            <Text style={styles.subtitle}>Instruções para visita</Text>
            <Text style={styles.description}>
              Venha como se sentir a vontade e traga muito amor e paciência para
              dar.
            </Text>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
                <Text style={styles.buttonText}>Qualquer horário</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                <Text style={styles.buttonText}>Local púlico</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default InfoDetails;
