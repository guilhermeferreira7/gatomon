import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet, Text, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../../assets/colors";

import Footer from "../../components/Footer";
import AppButton from "../../components/AppButton";

import useAuth from "../../firebase/hooks/useAuth";

import AppContext from "../../contexts/AppContext";
import HeaderAlt from "../../components/HeaderAlt";

export default function Login({ navigation }) {
  const app = useContext(AppContext);
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password)
      .then((res) => {
        AsyncStorage.setItem("login", JSON.stringify(res.user));
        app.setLogged(true);
        navigation.navigate("Home");
      })
      .catch(() => {
        Alert.alert("Erro", "Login ou senha invalida", [
          {
            text: "Ok",
          },
        ]);
      });
  };

  return (
    <View style={styles.container}>
      <HeaderAlt />

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
});
