import { SafeAreaView, StyleSheet, Text } from "react-native";
import Routes from "./src/Routes";

import firebaseConfig from "./src/firebase/config/firebaseConfig";
import useFirebase from "./src/firebase/hooks/useFirebase";
import { getAuth } from "firebase/auth";
import Login from "./src/pages/Login";

export default function App() {
  const firebaseApp = useFirebase(firebaseConfig);

  if (!firebaseApp) return <Text>Loading...</Text>;

  if (!getAuth()) return <Login />;

  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
