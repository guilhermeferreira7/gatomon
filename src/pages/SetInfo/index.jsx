import { View, Text } from "react-native";
import { getAuth } from "firebase/auth";

import HeaderAlt from "../../components/HeaderAlt";

export default function SetInfo({ route }) {
  const user = route.params.user;

  return (
    <View>
      <HeaderAlt />
      <Text>{user.displayName}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}
