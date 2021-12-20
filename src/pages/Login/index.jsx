import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

function Login() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate("Home");
  }

  function navigateToRegister() {
    navigation.navigate("Scanner");
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Image source={logoImg} />

        <ScrollView>
          <View style={styles.content}>
            <View style={styles.top}>
              <Text style={styles.title}>Login:</Text>

              <TouchableOpacity
                onPress={() => {
                  navigateToRegister();
                }}
              >
                <Text style={styles.createAccount}>Criar conta</Text>
              </TouchableOpacity>
            </View>

            <TextInput style={styles.input} placeholder="E-mail" />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Senha"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigateToHome();
              }}
            >
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.textPasswordRecovery}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default Login;
