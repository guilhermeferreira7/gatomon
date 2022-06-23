import { View, ScrollView, StyleSheet, Modal, Text } from "react-native";
import { useState } from "react";

import colors from "../../../assets/colors";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AppButton from "../../../components/AppButton";
import GameInfo from "../../../components/GameInfo";
import getUserLogin from "../../../services/getUserLogin";
import I18n from "i18n-js";

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header />

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

      {/* <GameInfo /> */}

      <ScrollView>
        <View style={styles.btnList}>
          <View style={styles.btn}>
            <AppButton
              onPress={() => navigation.navigate("Game")}
              title={I18n.t("play")}
            />
          </View>
          <View style={styles.btn}>
            <AppButton
              onPress={() => navigation.navigate("Collection")}
              title={I18n.t("collection")}
            />
          </View>
          <View style={styles.btn}>
            <AppButton
              onPress={() => navigation.navigate("Store")}
              title={I18n.t("store")}
            />
          </View>
          <View style={styles.btn}>
            <AppButton
              onPress={() => navigation.navigate("Ranking")}
              title="Ranking"
            />
          </View>
          <View style={styles.btn}>
            <AppButton
              title="Teste Modal"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
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
    backgroundColor: "#ddd",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    width: 200,
    height: 200,
    margin: 200,
  },
});
