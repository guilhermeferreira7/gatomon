import { View, Text } from "react-native";
import { getAuth } from "firebase/auth";

export default function SetInfo({ route }) {
  return (
    <View>
      <Text>{route.params.user.name}</Text>
      <Text>{route.params.user.email}</Text>
      <Text>{route.params.user.password}</Text>
    </View>
  );
}
