import { View, Text, StyleSheet } from "react-native";

import colors from "../../assets/colors";
import useList from "../../firebase/hooks/useList";
import listToArray from "../../firebase/services/listToArray";
import { getAuth } from "firebase/auth";
import Loading from "../Loading";

export default function GameInfo() {
  if (getAuth()) {
    const uid = getAuth().currentUser.uid;
    let cards = useList(`${uid}/cards/`).data;
    if (!cards) return <Loading />;
    cards = listToArray(cards);
  }

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
