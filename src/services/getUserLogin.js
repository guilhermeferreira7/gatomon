import AsyncStorage from "@react-native-async-storage/async-storage";

export default function getUserLogin() {
  let user = {};
  AsyncStorage.getItem("login").then((res) => {
    if (res) {
      user = res;
    }
  });

  return user;
}
