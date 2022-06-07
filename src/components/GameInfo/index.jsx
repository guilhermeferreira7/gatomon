import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";

import colors from "../../assets/colors";
import useList from "../../firebase/hooks/useList";
import listToArray from "../../firebase/services/listToArray";
import getUserLogin from "../../services/getUserLogin";
import { getAuth } from "firebase/auth";

export default function GameInfo() {
  const uid = getAuth().currentUser.uid;
  let cards = useList(`${uid}/cards/`).data;
  if (!cards) return <Text>Loading</Text>;
  cards = listToArray(cards);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>gatomons {cards.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
  text: {
    padding: 20,
    fontSize: 20,
    fontStyle: "italic",
    color: colors.primary,
  },
});
