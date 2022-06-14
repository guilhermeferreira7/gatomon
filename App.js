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

export default function App() {
  const firebaseApp = useFirebase(firebaseConfig);
  const [logged, setLogged] = useState(false);

  const app = {
    logged,
    setLogged,
  };

  useEffect(() => {
    if (getUserLogin()) {
      setLogged(true);
    }
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
