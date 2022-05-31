import { SafeAreaView, StyleSheet } from "react-native";
import Routes from "./src/Routes";

// import firebaseConfig from "./src/firebase/config/firebaseConfig";
// import useFirebase from "./src/firebase/hooks/useFirebase";

export default function App() {
  // const firebaseApp = useFirebase(firebaseConfig);

  // if (!firebaseApp) return <Text>Loading...</Text>;
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
