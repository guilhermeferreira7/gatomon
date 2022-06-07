import { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";

import Header from "../../components/Header";
import AppButton from "../../components/AppButton";

import useList from "../../firebase/hooks/useList";
import listToArray from "../../firebase/services/listToArray";

import colors from "../../assets/colors";

import { getAuth } from "firebase/auth";

export default function Collection() {
  const uid = getAuth().currentUser.uid;
  let cards = useList(uid + "/cards/").data;
  if (!cards) return <Text>Loading...</Text>;

  cards = listToArray(cards);

  const Card = ({ item }) => {
    const value = item.CatType == "Rare" ? 1000 : 300;

    const info = () => {
      console.log("info");
    };

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
        <Text>Valor: {value}</Text>
        <AppButton title="Info" onPress={info} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        numColumns={2}
        data={cards}
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
