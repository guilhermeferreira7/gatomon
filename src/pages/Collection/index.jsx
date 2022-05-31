import { View, FlatList, Image, Text, StyleSheet, Button } from "react-native";

import { useState, useEffect } from "react";

import Header from "src/components/Header";
import api from "src/services/api.js";

export default function Collection() {
  const [cats, setCats] = useState([]);

  const loadCats = async () => {
    const res = await api.get("/cats");
    setCats(res.data);
  };

  useEffect(() => {
    loadCats();
  }, []);

  const Card = ({ item }) => {
    return <View style={styles.card}></View>;
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
