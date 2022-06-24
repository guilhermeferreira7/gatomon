import { View, ScrollView, StyleSheet, Modal, Text } from "react-native";
import { useState, useContext } from "react";
import colors from "../../../../assets/colors";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import AppButton from "../../../components/AppButton";
import i18n, { t as translate } from "i18n-js";
import AppContext from "../../../contexts/AppContext";

export default function Home({ navigation }) {
  const app = useContext(AppContext);
  i18n.locale = app.lang;
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

      <ScrollView>
        <View style={styles.btnList}>
          <View style={styles.btn}>
            <AppButton
              onPress={() => navigation.navigate("Game")}
              title={translate("play")}
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
