import AsyncStorage from "@react-native-async-storage/async-storage";

export default function getUserLogin() {
  const getUser = async () => {
    return JSON.parse(await AsyncStorage.getItem("login"));
  };

  console.log(getUser());

  let user = {};
  AsyncStorage.getItem("login").then((res) => {
    if (res) {
      user = res;
    }
  });

  return user;
}
