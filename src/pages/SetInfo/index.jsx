import { View, Text, StyleSheet } from "react-native";
import { getAuth } from "firebase/auth";

import api from "../../services/api";

import useList from "../../firebase/hooks/useList";

import HeaderAlt from "../../components/HeaderAlt";
import Loading from "../../components/Loading";
import colors from "../../assets/colors";
import Footer from "../../components/Footer";

export default function SetInfo() {
  const user = getAuth().currentUser;
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

      <Text style={styles.title}>Seja bem vindo {user.displayName},</Text>
      <Text style={styles.title}>termine de configurar sua conta:</Text>

      <View>
        <Text style={styles.text}>Nome: {user.displayName}</Text>
      </View>
      <View>
        <Text style={styles.text}>Email: {user.email}</Text>
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
    fontSize: 22,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
