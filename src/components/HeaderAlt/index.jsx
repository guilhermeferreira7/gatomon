import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import catImg from "./Hermeowne.jpg";
import colors from "../../assets/colors";

export default function HeaderAlt() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gatomon</Text>
      <Image source={catImg} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
  },
  title: {
    fontSize: 28,
    color: colors.primary,
    textTransform: "uppercase",
    alignSelf: "center",
  },
  icon: {
    width: 114,
    height: 80,
    alignSelf: "center",
  },
});
