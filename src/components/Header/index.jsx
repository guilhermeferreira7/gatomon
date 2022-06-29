import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import colors from "../../../assets/colors";

import { getAuth } from "firebase/auth";

export default function Header() {
  const user = getAuth().currentUser;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gatomon</Text>

      <Image
        source={{
          uri: user.photoURL,
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 20,
    flexDirection: "row",
  },
  text: {
    marginLeft: 16,
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    alignSelf: "center",
    flex: 1,
    color: colors.primary,
  },
  image: {
    width: 114,
    height: 80,
    marginBottom: 5,
  },
});
