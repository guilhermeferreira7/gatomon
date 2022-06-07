import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.apiLink}>
        <Text style={styles.text}>API data from </Text>
        <TouchableOpacity>
          <Text style={styles.text}>https://neko-atsume.emshea.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 10,
  },
  apiLink: {
    flexDirection: "row",
  },
  text: {
    fontStyle: "italic",
  },
});
