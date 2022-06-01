import { View, StyleSheet, Text } from "react-native";
import colors from "../../assets/colors";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppButton from "../../components/AppButton";
import GameInfo from "../../components/GameInfo";

import useAuth from "../../firebase/hooks/useAuth";

export default function Home({ navigation }) {
  const { user, login, logout } = useAuth();
  console.log(user);

  return (
    <View style={styles.container}>
      <Header />

      <GameInfo />

      <View style={styles.btnList}>
        <View style={styles.btn}>
          <AppButton
            onPress={() => navigation.navigate("Game")}
            title="Jogar"
          />
        </View>
        <View style={styles.btn}>
          <AppButton
            onPress={() => navigation.navigate("Collection")}
            title="Coleção"
          />
        </View>
        <View style={styles.btn}>
          <AppButton
            onPress={() => navigation.navigate("Store")}
            title="Loja"
          />
        </View>
        <View style={styles.btn}>
          <AppButton
            onPress={() => navigation.navigate("Ranking")}
            title="Ranking"
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
  },
  btnList: {
    alignItems: "center",
    margin: 20,
  },
  btn: {
    margin: 10,
  },
});
