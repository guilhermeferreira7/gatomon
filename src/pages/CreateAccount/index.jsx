import { TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";
import Header from "../../components/Header";
import colors from "../../assets/colors";
import Footer from "../../components/Footer";
import AppButton from "../../components/AppButton";

import createUser from "../../firebase/hooks/createUser";

export default function CreateAccount({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    createUser(email, password, name);
    navigation.navigate("Login");
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
