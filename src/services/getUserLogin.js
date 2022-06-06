import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getUserLogin() {
  return JSON.parse(await AsyncStorage.getItem("login"));
}
