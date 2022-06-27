import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../../../assets/colors";
import HeaderAlt from "../../../components/HeaderAlt";
import Footer from "../../../components/Footer";
import AppButton from "../../../components/AppButton";
import useAuth from "../../../firebase/hooks/useAuth";
import AppContext from "../../../contexts/AppContext";
import i18n, { t as translate } from "i18n-js";
import brFlag from "./br.png";
import usFlag from "./us.png";

export default function Login({ navigation }) {
  const app = useContext(AppContext);
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  i18n.locale = app.lang;

  const handleLogin = () => {
    login(email, password)
      .then((res) => {
        AsyncStorage.removeItem("login");
        AsyncStorage.setItem("login", JSON.stringify(res.user));
        app.setLogged(true);
        navigation.navigate("Home");
      })
      .catch(() => {
        Alert.alert(translate("fail"), translate("errorLogin"), [
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
          placeholder={translate("password")}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <View style={styles.inputs}>
        <AppButton onPress={handleLogin} title="Login" />
      </View>

      <View style={styles.register}>
        <Text style={styles.text}>{translate("signUp")}</Text>
        <View style={styles.inputs}>
          <AppButton
            onPress={() => navigation.navigate("CreateAccount")}
            title={translate("signUpBtn")}
          />
        </View>
      </View>

      <Text style={styles.changeLang}>Mudar idioma/Change language</Text>

      <View style={styles.langs}>
        <TouchableOpacity
          onPress={() => {
            app.setLang("pt-BR");
          }}
        >
          <Image style={styles.img} source={brFlag} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            app.setLang("en-US");
          }}
        >
          <Image style={styles.img} source={usFlag} />
        </TouchableOpacity>
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
    alignSelf: "center",
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
  langs: {
    flexDirection: "row",
  },
  img: {
    margin: 10,
    width: 50,
    height: 50,
  },
  changeLang: {
    fontSize: 20,
    marginTop: 20,
  },
});
