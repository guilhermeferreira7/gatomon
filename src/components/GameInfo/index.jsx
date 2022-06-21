import { View, Text, StyleSheet } from "react-native";

import colors from "../../assets/colors";

import Loading from "../../components/Loading";

import getUserLogin from "../../services/getUserLogin";

export default function GameInfo() {
  const user = getUserLogin();
  if (!user) return <Loading />;

  const name = user.displayName;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
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
