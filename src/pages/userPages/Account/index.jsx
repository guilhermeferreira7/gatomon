import { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../../../assets/colors";
import Footer from "../../../components/Footer";
import AppButton from "../../../components/AppButton";
import AppContext from "../../../contexts/AppContext";
import useAuth from "../../../firebase/hooks/useAuth";
import i18n, { t as translate } from "i18n-js";
import { getAuth, updateEmail, updateProfile } from "firebase/auth";

export default function Account({ navigation }) {
  const user = getAuth().currentUser;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const app = useContext(AppContext);
  i18n.locale = app.lang;
  const { logout } = useAuth();

  const changeName = () => {
    Alert.alert("Confirmar", "Quer mesmo mudar o nome?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: () => updateProfile(user, { displayName: name }),
      },
    ]);
  };
  const changeEmail = () => {
    Alert.alert("Confirmar", "Quer mesmo mudar o email?", [
      {
        text: "Não",
      },
      { text: "Sim", onPress: () => updateEmail(user, email) },
    ]);
  };

  const handleLogout = () => {
    logout();
    AsyncStorage.removeItem("login");
    app.setLogged(false);
    if (app.logged) return <Text>Saindo...</Text>;
    navigation.navigate("Login");
  };

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>GATOMON</Text>
        <AppButton onPress={handleLogout} title="Logout" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>{translate("accountInfo")}</Text>

      <Text style={styles.txt}>
        {translate("name")}: {user.displayName}
      </Text>
      <Text style={styles.txt}>Email: {user.email}</Text>
      <View style={styles.textInput}>
        <TextInput
          style={styles.placeholder}
          placeholder={translate("name")}
          onChangeText={(text) => {
            setName(text);
          }}
        />
      </View>
      <AppButton title="Mudar nome" onPress={changeName} />

      <View style={styles.textInput}>
        <TextInput
          style={styles.placeholder}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>
      <AppButton title="Mudar email" onPress={changeEmail} />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  headerContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: colors.primary,
    fontSize: 28,
    margin: 15,
  },
  txt: {
    fontSize: 20,
  },
  textInput: {
    width: "50%",
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 10,
    borderColor: colors.primary,
  },
  placeholder: {
    color: colors.primary,
    fontSize: 20,
  },
});
