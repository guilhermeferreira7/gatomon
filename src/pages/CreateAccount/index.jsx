import { TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";
import Header from "src/components/Header";
import colors from "src/assets/colors";
import Footer from "src/components/Footer";
import AppButton from "src/components/AppButton";

export default function CreateAccount({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    // const user = {
    //   name: "",
    //   email: "",
    //   password: "",
    // };
    // console.log(name);
    // console.log(email);
    // console.log(password);
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
