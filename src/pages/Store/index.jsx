import { Text, View, FlatList, StyleSheet, Image, Button } from "react-native";
import { useState, useEffect } from "react";
import api from "src/services/api.js";
import Header from "src/components/Header";
import colors from "src/assets/colors";

export default function Store({ navigation }) {
  const [cats, setCats] = useState([]);

  const loadCats = async () => {
    const res = await api.get("/cats");
    setCats(res.data);
  };

  useEffect(() => {
    loadCats();
  }, []);

  const Card = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image
          source={{
            uri: item.CatImage,
          }}
          style={styles.image}
        />
        <Text>{item.CatName}</Text>
        <Text>{item.CatPowerLevel}</Text>
        <Text>Valor: {item.CatType == "Rare" ? "1000" : "300"}</Text>
        <Text>{item.CatType == "Rare" ? "Raro" : "Comum"}</Text>
        <Button title="Comprar" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={cats}
        renderItem={Card}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flatList: {
    margin: 10,
  },
  card: {
    alignItems: "center",
    flexGrow: 1,
    flexBasis: 0,
    borderStyle: "solid",
    borderColor: colors.darkBlue,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: colors.lightBlue,
    margin: 10,
    padding: 5,
  },
  image: {
    width: 114,
    height: 80,
    marginBottom: 5,
  },
});
