import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../assets/colors";
import i18n from "i18n-js";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.t("loading")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: colors.primary,
  },
});
