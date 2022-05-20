import { View, StyleSheet, ScrollView, Button } from "react-native";
import colors from "../../assets/colors";
import Header from "../../components/Header";

export default function Home({ navigation }) {
  //Extrair essas funcoes em uma só?
  const collection = () => {
    navigation.navigate("Collection");
  };

  const play = () => {
    navigation.navigate("Game");
  };

  const store = () => {
    navigation.navigate("Store");
  };

  const ranking = () => {
    navigation.navigate("Ranking");
  };

  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.buttonStyle}>
        <Button title="Jogar" onPress={play} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Coleção" onPress={collection} />
      </View>
      <Button color={colors.button} title="Loja" onPress={store} />
      <Button style={styles.buttonStyle} title="Ranking" onPress={ranking} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  buttonStyle: {
    // width: "40%",
    // marginTop: 10,
    // alignSelf: "center",
    color: colors.button,
  },
});
