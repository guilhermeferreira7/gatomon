import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
// import * as WebBrowser from "expo-web-browser";

export default function Footer() {
  // const openUrl = async (url) => {
  //   await WebBrowser.openBrowserAsync(url);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.apiLink}>
        <Text style={styles.text}>API data from </Text>
        {/* <TouchableOpacity onPress={openUrl("https://neko-atsume.emshea.com")}> */}
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
