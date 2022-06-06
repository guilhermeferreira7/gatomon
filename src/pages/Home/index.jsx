import { View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../../assets/colors";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppButton from "../../components/AppButton";
import GameInfo from "../../components/GameInfo";

export default function Home({ navigation }) {
  (async () => {
    console.log(JSON.parse(await AsyncStorage.getItem("login")).uid);
  })();

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
