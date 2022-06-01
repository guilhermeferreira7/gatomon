import { Text, View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import colors from "../../assets/colors";

export default function Ranking() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Ranking</Text>
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
