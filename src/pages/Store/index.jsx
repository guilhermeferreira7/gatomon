import { Text, View, FlatList, StyleSheet, Image, Button } from "react-native";
import { useState, useEffect } from "react";
import api from "src/services/api.js";
import Footer from "src/components/Footer";
import GameInfo from "src/components/GameInfo";
import AppButton from "src/components/AppButton";
import colors from "src/assets/colors";

export default function Store() {
  const [cats, setCats] = useState([]);

  const loadCats = async () => {
    let cats = [];
    let invalidNumbers = [];
    for (let i = 0; i < 4; i++) {
      let random = Math.round(Math.random() * 65 + 1);

      if (!invalidNumbers.includes(random)) {
        let cat = await api.get(`/cats/${random}`);
        cats.push(cat.data);
      } else {
        i--;
      }
    }

    setCats(cats);
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
        <Text>
          {item.CatName} {item.CatPowerLevel}
        </Text>
        <Text>{item.CatType == "Rare" ? "Raro" : "Comum"}</Text>
        <Text>Valor: {item.CatType == "Rare" ? "1000" : "300"}</Text>
        <AppButton title="Comprar" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <GameInfo />

      <View>
        <Text style={styles.text}>Próxima atualização em 3h 20m 10s</Text>
      </View>

      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={cats}
        renderItem={Card}
        keyExtractor={(item, index) => index}
      />

      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flatList: {
    flex: 0.9,
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
  footer: {
    flex: 0.1,
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
  },
});
