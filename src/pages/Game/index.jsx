import { Text, View, StyleSheet } from "react-native";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import colors from "src/assets/colors";

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
