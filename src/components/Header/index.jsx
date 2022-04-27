import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text> {user} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 48,
  },
});