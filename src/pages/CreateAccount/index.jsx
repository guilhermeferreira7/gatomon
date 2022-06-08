import { useState, useContext } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import { updateProfile } from "firebase/auth";

import colors from "../../assets/colors";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppButton from "../../components/AppButton";

import { createUser } from "../../firebase/services/userSettings";
import formatFirebaseError from "../../firebase/services/formatFirebaseError";

export default function CreateAccount({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, { displayName: name });
        navigation.navigate("SetInfo", { user: res.user });
      })
      .catch((error) => {
        let errorMessage = formatFirebaseError(error.code);

        Alert.alert("Erro ao criar a conta", errorMessage, [
          {
            text: "Ok",
          },
        ]);
      });
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.textInput}>
        <TextInput
          style={styles.placeholder}
          placeholder="Nome"
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.placeholder}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          style={styles.placeholder}
          placeholder="Senha"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.button}>
        <AppButton onPress={handleCreateAccount} title="Criar conta" />
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
  button: {
    margin: 5,
    alignItems: "center",
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
