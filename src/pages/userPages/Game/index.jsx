import { Text, View, StyleSheet } from "react-native";

import colors from "../../../../assets/colors";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Game() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Interface de jogo</Text>
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
});
