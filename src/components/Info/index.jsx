import { View, Text, StyleSheet } from "react-native";

import Loading from "../Loading";

import colors from "../../../assets/colors";

import { getAuth } from "firebase/auth";

import useReference from "../../firebase/hooks/useReference";
import useList from "../../firebase/hooks/useList";
import listToArray from "../../firebase/services/listToArray";

export default function Info() {
  const user = getAuth().currentUser;
  const uid = user.uid;
  const [coins, setCoins] = useReference(uid + "/coins/");
  const cards = useList(`${uid}/cards/`);
  if (!cards.data) return <Loading />;
  const gatomonsLength = listToArray(cards.data).length;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gatomons: {gatomonsLength}</Text>
      <Text style={styles.text}>Coins: {coins}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
  text: {
    padding: 10,
    fontSize: 20,
    fontStyle: "italic",
    color: colors.primary,
  },
});
