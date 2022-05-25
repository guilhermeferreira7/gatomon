import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import colors from "src/assets/colors";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const navigation = useNavigation();
  const handleProfile = () => {
    navigation.navigate("Account");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gatomon</Text>

      <TouchableHighlight style={styles.icon} onPress={handleProfile}>
        <FontAwesome name="user-circle-o" size={60} color={colors.primary} />
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
    color: colors.primary,
  },
  icon: {
    // padding: 10,
    // borderWidth: 2,
    // borderColor: colors.primary,
    // borderRadius: 10,
  },
});
