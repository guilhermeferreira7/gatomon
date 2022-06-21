import { useContext, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import colors from "../../../assets/colors";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AppButton from "../../../components/AppButton";

import AppContext from "../../../contexts/AppContext";

import useAuth from "../../../firebase/hooks/useAuth";

import getUserLogin from "../../../services/getUserLogin";

export default function Account({ navigation }) {
  const app = useContext(AppContext);
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    AsyncStorage.removeItem("login");
    app.setLogged(false);
    if (app.logged) return <Text>Saindo...</Text>;
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
