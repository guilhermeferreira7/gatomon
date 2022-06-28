import { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from "react-native";
import { getAuth, updateProfile } from "firebase/auth";
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
import { AntDesign } from "@expo/vector-icons";
import { t as translate } from "i18n-js";

export default function SetInfo({ route, navigation }) {
  const { login } = useAuth();
  const app = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const user = getAuth().currentUser;
  const email = user.email;
  const name = user.displayName;
  const password = route.params.password;
  const uid = getAuth().currentUser.uid;
  const [coins, setCoins] = useReference(uid + "/coins/");
  const cards = useList(uid + "/cards/");

  const loadCats = async () => {
    const cats = [];
    for (let i = 1; i <= 4; i++) {
      const cat = await api.get(`/cats/${i}`);
      cats.push(cat.data);
    }
    setData(cats);
  };

  const Card = ({ item }) => {
    const selectCat = () => {
      Alert.alert(
        "Confirmar",
        `Quer escolher ${item.CatName} como gatomon inicial?`,
        [
          {
            text: "Não",
          },
          {
            text: "Sim",
            onPress: () => {
              cards.create(item);
              updateProfile(user, { photoURL: item.CatImage }).then(() => {
                setModalVisible(!modalVisible);
              });
            },
          },
        ]
      );
    };

    return (
      <View>
        <TouchableOpacity style={styles.cat} onPress={selectCat}>
          <Image
            source={{
              uri: item.CatImage,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal animationType="fade" visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <FlatList
            numColumns={2}
            data={data}
            renderItem={Card}
            keyExtractor={(item, index) => index}
          />
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <AntDesign name="close" size={28} color="black" />
          </TouchableOpacity>
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
        <AppButton
          title="Starter cat"
          onPress={() => {
            loadCats();
            setModalVisible(!modalVisible);
          }}
        />
      </View>

      <View style={styles.button}>
        <AppButton
          title={translate("continue")}
          onPress={() => {
            login(email, password).then((res) => {
              setCoins(2000);
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
  closeBtn: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  image: {
    width: 114,
    height: 80,
    marginBottom: 5,
  },
  cat: {
    margin: 10,
  },
});
