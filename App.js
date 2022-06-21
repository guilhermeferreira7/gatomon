import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Warning: Can't perform a React state update on an unmounted component.",
]);
LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"]);
LogBox.ignoreLogs(["Setting a timer for a long period of time, i.e. multiple"]);

import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

import Routes from "./src/routes";

import firebaseConfig from "./src/firebase/config/firebaseConfig";
import useFirebase from "./src/firebase/hooks/useFirebase";

import AppContext from "./src/contexts/AppContext";
import getUserLogin from "./src/services/getUserLogin";

import i18n from "i18n-js";

import * as Localization from "expo-localization";

export default function App() {
  const firebaseApp = useFirebase(firebaseConfig);
  const [logged, setLogged] = useState(false);

  i18n.translations = {
    en: {
      password: "Password",
      signUp: "Create Account",
      signUpBtn: "Sign-up",
    },
    pt: { password: "Senha", signUp: "Cadastre-se", signUpBtn: "Cadastrar" },
  };

  const app = {
    logged,
    setLogged,
  };

  useEffect(() => {
    getUserLogin().then((res) => {
      if (res) {
        setLogged(true);
      }
    });
  }, []);

  if (!firebaseApp) return <Text>Loading...</Text>;

  return (
    <AppContext.Provider value={app}>
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
