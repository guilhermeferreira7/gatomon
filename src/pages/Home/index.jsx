import { View, StyleSheet, ScrollView, Button } from "react-native";
import colors from "src/assets/colors";
import Header from "src/components/Header";
import MyButton from "src/components/MyButton";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <MyButton title="Jogar" action="Game" />
      <MyButton title="Coleção" action="Collection" />
      <MyButton title="Loja" action="Store" />
      <MyButton title="Ranking" action="Ranking" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});
