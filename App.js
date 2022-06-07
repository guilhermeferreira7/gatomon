import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Routes from "./src/Routes";

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
