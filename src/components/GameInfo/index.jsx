import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function GameInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>gatocoins 200</Text>
      <Text style={styles.text}>gatomons 12</Text>
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
    color: "#aaaaaa",
  },
});
