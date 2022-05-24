import React from "react";
import { TouchableOpacity, TouchableHighlight, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MyButton({ title, action }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(action);
      }}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
