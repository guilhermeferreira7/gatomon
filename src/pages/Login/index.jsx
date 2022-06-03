import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Image, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import catImg from "./Hermeowne.jpg";
import colors from "../../assets/colors";

import Footer from "../../components/Footer";
import AppButton from "../../components/AppButton";

import useAuth from "../../firebase/hooks/useAuth";

export default function Login({ navigation }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  (async () => {
    console.log(JSON.parse(await AsyncStorage.getItem("login")));
  })();
  // }, []);

  const handleLogin = () => {
    let isMounted = true;
    login(email, password)
      .then((res) => {
        AsyncStorage.setItem("login", JSON.stringify(res.user));
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
