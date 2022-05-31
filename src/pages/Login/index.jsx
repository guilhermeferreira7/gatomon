import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import React, { useState } from "react";

import colors from "src/assets/colors";

import Footer from "src/components/Footer";
import AppButton from "src/components/AppButton";

import catImg from "./Hermeowne.jpg";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email);
    console.log(password);

    const user = {
      email,
      password,
      cards: [],
    };

    AsyncStorage.setItem("login", JSON.stringify(user))
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });

    navigation.navigate("Home");
  };

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
        <TextInput
          style={styles.placeholder}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.placeholder}
          placeholder="Senha"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <View style={styles.inputs}>
        <AppButton onPress={handleLogin} title="Login" />
      </View>

      <View style={styles.register}>
        <Text style={styles.text}>Não tem conta? </Text>
        <View style={styles.inputs}>
          <AppButton
            onPress={() => navigation.navigate("CreateAccount")}
            title="Cadastrar"
          />
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
