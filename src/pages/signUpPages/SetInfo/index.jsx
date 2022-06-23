import { useState, useContext } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";

import { getAuth } from "firebase/auth";

import api from "../../../services/api";

import useList from "../../../firebase/hooks/useList";

import HeaderAlt from "../../../components/HeaderAlt";
import Footer from "../../../components/Footer";

import colors from "../../../../assets/colors";
import AppButton from "../../../components/AppButton";
import useAuth from "../../../firebase/hooks/useAuth";

import AppContext from "../../../contexts/AppContext";
import Loading from "../../../components/Loading";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { t as translate } from "i18n-js";

export default function SetInfo({ route, navigation }) {
  const { login } = useAuth();
  const app = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);
  const user = getAuth().currentUser;
  const email = user.email;
  const name = user.displayName;
  const password = route.params.password;
  const uid = getAuth().currentUser.uid;
  const cards = useList(uid + "/cards/");

  console.log(password);

  const cats = [];

  for (let i = 1; i <= 4; i++) {
    api.get(`/cats/${i}`).then((res) => {
      cats.push(res.data);
    });
  }

  cats.forEach((cat) => {
    console.log(cat);
  });

  return (
    <View style={styles.container}>
      <Modal animationType="fade" visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Text>Modal content</Text>
          <AppButton
            title="Fechar"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </View>
      </Modal>

      <HeaderAlt />

      <View style={styles.title}>
        <Text style={styles.textTitle}>
          {translate("welcome")} {name},
        </Text>
        <Text style={styles.textTitle}>{translate("finishAcc")}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.text}>
          {translate("name")} {name}
        </Text>
        <Text style={styles.text}>Email: {email}</Text>
      </View>

      <View style={styles.button}>
        <AppButton title={translate("avatar")} />
      </View>
      <View style={styles.button}>
        <AppButton
          title={translate("continue")}
          onPress={() => {
            login(email, password).then((res) => {
              AsyncStorage.removeItem("login");
              AsyncStorage.setItem("login", JSON.stringify(res.user));
              app.setLogged(true);
              if (!app.logged) return <Loading />;
              navigation.navigate("Home");
            });
          }}
        />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
  },
  title: {
    alignItems: "center",
  },
  textTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    color: colors.primary,
  },
  info: {
    margin: 20,
  },
  inputField: {},
  button: {
    margin: 10,
  },
});
