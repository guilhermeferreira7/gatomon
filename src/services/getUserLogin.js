import AsyncStorage from "@react-native-async-storage/async-storage";

export default function getUserLogin() {
  return AsyncStorage.getItem("login");
}
