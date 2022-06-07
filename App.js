import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Routes from "./src/Routes";

import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Warning: Can't perform a React state update on an unmounted component.",
]);
LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"]);
LogBox.ignoreLogs(["Setting a timer for a long period of time, i.e. multiple"]);

import firebaseConfig from "./src/firebase/config/firebaseConfig";
import useFirebase from "./src/firebase/hooks/useFirebase";

import AppContext from "./src/contexts/AppContext";
import getUserLogin from "./src/services/getUserLogin";

export default function App() {
  const [logged, setLogged] = useState(false);
  const firebaseApp = useFirebase(firebaseConfig);

  if (!firebaseApp) return <Text>Loading...</Text>;

  getUserLogin().then((res) => {
    if (res) {
      setLogged(true);
    }
  });

  const app = {
    logged,
    setLogged,
  };

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
