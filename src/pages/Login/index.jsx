import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import React from "react";
import colors from "src/assets/colors";
import Footer from "src/components/Footer";
import NavBtn from "src/components/NavBtn";
import catImg from "./Hermeowne.jpg";

export default function Login() {
  const LoginHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Gatomon</Text>
        <Image source={catImg} style={styles.icon} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <LoginHeader />

      <View style={styles.textInput}>
        <TextInput style={styles.placeholder} placeholder="Nome de usuário" />
      </View>
      <View style={styles.textInput}>
        <TextInput style={styles.placeholder} placeholder="Senha" />
      </View>
      <View style={styles.inputs}>
        <NavBtn title="Login" route="Home" />
      </View>

      <View style={styles.register}>
        <Text style={styles.text}>Não tem conta? </Text>
        <View style={styles.inputs}>
          <NavBtn title="Cadastrar" route="CreateAccount" />
        </View>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  register: {
    marginTop: 20,
  },
  inputs: {
    margin: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  textInput: {
    width: "50%",
    borderBottomWidth: 1,
    margin: 10,
    borderColor: colors.primary,
  },
  placeholder: {
    color: colors.primary,
    fontSize: 20,
  },

  headerContainer: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
  },
  headerTitle: {
    fontSize: 28,
    color: colors.primary,
    textTransform: "uppercase",
    alignSelf: "center",
  },
  icon: {
    width: 114,
    height: 80,
    alignSelf: "center",
  },
});
