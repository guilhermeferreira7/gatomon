import { View, StyleSheet, ScrollView, Button } from "react-native";
import colors from "src/assets/colors";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import NavBtn from "src/components/NavBtn";
import GameInfo from "src/components/GameInfo";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <GameInfo />

      <View style={styles.btnList}>
        <View style={styles.btn}>
          <NavBtn title="Jogar" route="Game" />
        </View>
        <View style={styles.btn}>
          <NavBtn title="Coleção" route="Collection" />
        </View>
        <View style={styles.btn}>
          <NavBtn title="Loja" route="Store" />
        </View>
        <View style={styles.btn}>
          <NavBtn title="Ranking" route="Ranking" />
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
