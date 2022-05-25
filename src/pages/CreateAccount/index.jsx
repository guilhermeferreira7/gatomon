import { Text, View, StyleSheet } from "react-native";
import Header from "src/components/Header";
import colors from "src/assets/colors";
import Footer from "src/components/Footer";

export default function CreateAccount() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Criar conta</Text>
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
