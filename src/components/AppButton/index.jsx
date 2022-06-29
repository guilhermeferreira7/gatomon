import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import colors from "../../../assets/colors";

export default function AppButton({ onPress, title }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
