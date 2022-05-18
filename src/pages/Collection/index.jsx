import { View, FlatList, Image, Text, StyleSheet, Button } from "react-native";

import { useState, useEffect } from "react";
// import axios from 'axios'

import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../services/api.js";

export default function Collection({ navigation }) {
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
        <View style={styles.imageCard}>
          <Image
            source={{
              uri: item.CatImage,
            }}
            style={styles.imageSize}
          />
        </View>

        <View style={styles.textInfo}>
          <Text>Nome: {item.CatName}</Text>
          <Text>Poder: {item.CatPowerLevel}</Text>
          <Text>Raridade: {item.CatType == "Rare" ? "Raro" : "Comum"}</Text>
        </View>

        <View style={styles.moreInfoBtn}>
          <Button title="Mais informações" />
        </View>
      </View>
    );
  };

  return (
    <>
      <Header />
      <FlatList
        style={styles.collectionList}
        data={cats}
        renderItem={Card}
        keyExtractor={(item, index) => index}
      />
    </>
  );
}

const styles = StyleSheet.create({
  collectionList: {
    margin: 10,
  },
  card: {
    flexDirection: "row",
  },
  textInfo: {
    flex: 2,
  },
  imageCard: {
    flex: 2,
    marginBottom: 20,
  },
  imageSize: {
    width: 114,
    height: 80,
  },
  moreInfoBtn: {
    flex: 2,
  },
});
