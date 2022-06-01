import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../../assets/colors";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppButton from "../../components/AppButton";

import useAuth from "../../firebase/hooks/useAuth";

export default function Account({ navigation }) {
  const { logout } = useAuth();

  const handleLogout = () => {
    let isMounted = true;
    logout();
    AsyncStorage.removeItem("login");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Header />

      <Text>Informações da conta</Text>

      <AppButton onPress={handleLogout} title="Logout" />

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
