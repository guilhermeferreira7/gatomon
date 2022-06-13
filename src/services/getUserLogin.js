import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function getUserLogin() {
  AsyncStorage.getItem("login").then((res) => {
    if (res) {
      return res;
    }
  });

  return null;
}
