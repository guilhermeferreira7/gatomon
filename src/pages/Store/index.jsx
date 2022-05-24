import { Text, View, FlatList, StyleSheet, Image, Button } from "react-native";
import { useState, useEffect } from "react";
import api from "src/services/api.js";
import Header from "src/components/Header";
import colors from "src/assets/colors";

export default function Store() {
  const [cats, setCats] = useState([]);

  const getRandomCat = (type) => {
    const cat = {};
    return cat;
  };

  const loadCats = async () => {
    const res = await api.get("/cats");
    // setCats([
    //   getRandomCat("Common"),
    //   getRandomCat("Rare"),
    //   getRandomCat("Common"),
    // ]);
    setCats(res.data);
  };

  useEffect(() => {
    loadCats();
  }, []);

  const Card = ({ item }) => {
    return (
      <View style={[styles.card, item.CatType === "Rare" && styles.rareCard]}>
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
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: colors.commonCard,
    margin: 10,
    padding: 5,
  },
  rareCard: {
    backgroundColor: colors.rareCard,
  },
  image: {
    width: 114,
    height: 80,
    marginBottom: 5,
  },
});
