import { View, Text, StyleSheet } from "react-native";
import { getAuth } from "firebase/auth";

import api from "../../../services/api";

import useList from "../../../firebase/hooks/useList";

import HeaderAlt from "../../../components/HeaderAlt";
import Loading from "../../../components/Loading";
import Footer from "../../../components/Footer";

import colors from "../../../assets/colors";
import AppButton from "../../../components/AppButton";

export default function SetInfo() {
  const user = getAuth().currentUser;
  const name = user.displayName;
  const email = user.email;
  const uid = getAuth().currentUser.uid;
  const cards = useList(uid + "/cards/");

  let starterGatomon = {};
  (async () => {
    starterGatomon = await api.get("/cats/1");
    if (!starterGatomon) return <Loading />;
  })();

  console.log(starterGatomon);

  return (
    <View style={styles.container}>
      <HeaderAlt />

      <View style={styles.title}>
        <Text style={styles.textTitle}>Seja bem vindo {name},</Text>
        <Text style={styles.textTitle}>termine de configurar sua conta:</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.text}>Nome: {name}</Text>
        <Text style={styles.text}>Email: {email}</Text>
      </View>

      <View>
        <AppButton title="Escolha um avatar" />
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
  title: {
    marginBottom: 10,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    color: colors.primary,
  },
  info: {},
  inputField: {},
});
