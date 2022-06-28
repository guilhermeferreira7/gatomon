import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import colors from "../../../../assets/colors";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AppButton from "../../../components/AppButton";
import i18n, { t as translate } from "i18n-js";
import brFlag from "./br.png";
import usFlag from "./us.png";
import AppContext from "../../../contexts/AppContext";

import useAuth from "../../../firebase/hooks/useAuth";
import Info from "../../../components/Info";
import { getAuth } from "firebase/auth";
import useReference from "../../../firebase/hooks/useReference";

export default function Home({ navigation }) {
  const user = getAuth().currentUser;
  const [coins, setCoins] = useReference(user.uid + "/coins/");
  const { logout } = useAuth();
  const app = useContext(AppContext);
  i18n.locale = app.lang;

  const handleLogout = () => {
    logout();
    AsyncStorage.removeItem("login");
    app.setLogged(false);
    if (app.logged) return <Text>Saindo...</Text>;
    navigation.navigate("Login");
  };

  const addCoins = () => {
    setCoins(coins + 2000);
  };

  return (
    <View style={styles.container}>
      <Header />

      <Info />

      <ScrollView>
        <View style={styles.btnList}>
          <View style={styles.btn}>
            <AppButton
              onPress={() => navigation.navigate("Account")}
              title={translate("profile")}
            />
          </View>
          <View style={styles.btn}>
            <AppButton
              onPress={() => navigation.navigate("Collection")}
              title={translate("collection")}
            />
          </View>
          <View style={styles.btn}>
            <AppButton
              onPress={() => navigation.navigate("Store")}
              title={translate("store")}
            />
          </View>
          <View style={styles.btn}>
            <AppButton onPress={handleLogout} title="Logout" />
          </View>
          <View style={styles.btn}>
            <AppButton onPress={addCoins} title="+ moedas" />
          </View>
        </View>

        {/* <View style={styles.langs}>
          <TouchableOpacity
            onPress={() => {
              app.setLang("pt-BR");
            }}
          >
            <Image style={styles.imgFlag} source={brFlag} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              app.setLang("en-US");
            }}
          >
            <Image style={styles.imgFlag} source={usFlag} />
          </TouchableOpacity>
        </View> */}
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  btnList: {
    alignItems: "center",
    margin: 20,
  },
  btn: {
    margin: 10,
  },
  modalContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.commonCard,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    width: 300,
    height: 300,
    margin: 200,
    paddingTop: 40,
  },
  image: {
    width: 114,
    height: 80,
    marginBottom: 5,
  },
  cat: {
    margin: 10,
  },
  closeBtn: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  langs: {
    flexDirection: "row",
    alignSelf: "center",
  },
  imgFlag: {
    margin: 10,
    width: 50,
    height: 50,
  },
  changeLang: {
    fontSize: 20,
    marginTop: 20,
  },
});
