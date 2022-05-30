import { View, StyleSheet, ScrollView, Button } from "react-native";
import colors from "src/assets/colors";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import AppButton from "src/components/AppButton";
import GameInfo from "src/components/GameInfo";

export default function Home({ navigation }) {
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
