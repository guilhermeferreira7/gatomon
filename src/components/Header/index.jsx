import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import colors from "src/assets/colors";
import profileIcon from "./profileIcon.png";
import { useNavigation } from "@react-navigation/native";

export default function Header() {
  const navigation = useNavigation();
  const handleProfile = () => {
    navigation.navigate("Account");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gatomon</Text>

      <TouchableHighlight onPress={handleProfile}>
        <Image source={profileIcon} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 30,
    flexDirection: "row",
  },
  text: {
    marginLeft: 16,
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "uppercase",
    alignSelf: "center",
    flex: 1,
    color: "white",
  },
});
