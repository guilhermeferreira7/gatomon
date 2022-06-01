import { Text, View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import colors from "../../assets/colors";

export default function Account() {
  return (
    <View style={styles.container}>
      <Header />

      <Text>Informações da conta</Text>

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
