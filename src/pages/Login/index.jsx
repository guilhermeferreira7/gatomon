import { View, Button, TextInput, StyleSheet, Text } from "react-native";
import React from "react";
import Header from "src/components/Header";
import colors from "src/assets/colors";
import Footer from "src/components/Footer";

export default function Login({ navigation }) {
  const homePage = () => {
    navigation.navigate("Home");
  };

  const createAccount = () => {
    navigation.navigate("CreateAccount");
  };

  return (
    <View style={styles.container}>
      <Header title="Login" />

      <View style={styles.inputs}>
        <TextInput placeholder="Nome de usuário" />
      </View>
      <View style={styles.inputs}>
        <TextInput placeholder="Senha" />
      </View>
      <View style={styles.inputs}>
        <Button title="Login" onPress={homePage} />
      </View>

      <View style={styles.register}>
        <Text>Não tem conta? </Text>
        <Button title="Cadastrar" onPress={createAccount} />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  inputs: {
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
  },
  register: {
    marginTop: 20,
    alignSelf: "center",
  },
});
