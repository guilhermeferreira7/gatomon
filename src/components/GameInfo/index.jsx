import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Button } from "react-native";
import useAuth from "../../firebase/hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

export default function GameInfo() {
  const { user, login, logout } = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    let isMounted = true;
    logout();
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>gatocoins 200</Text>
      <Text style={styles.text}>gatomons 12</Text>
      <Button title="logout" onPress={handleLogout} />
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
