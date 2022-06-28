import { useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
  Modal,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../../../assets/colors";
import Footer from "../../../components/Footer";
import AppButton from "../../../components/AppButton";
import AppContext from "../../../contexts/AppContext";
import useAuth from "../../../firebase/hooks/useAuth";
import i18n, { t as translate } from "i18n-js";
import { getAuth, updateEmail, updateProfile } from "firebase/auth";
import api from "../../../services/api";
import { AntDesign } from "@expo/vector-icons";

export default function Account({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const user = getAuth().currentUser;
  const [avatars, setAvatars] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const app = useContext(AppContext);

  i18n.locale = app.lang;
  const { logout } = useAuth();

  const loadCats = async () => {
    const cats = [];
    for (let i = 60; i <= 63; i++) {
      const cat = await api.get(`/cats/${i}`);
      cats.push(cat.data);
    }
    setAvatars(cats);
  };

  const changeName = () => {
    Alert.alert("Confirmar", "Quer mesmo mudar o nome?", [
      {
        text: "Não",
      },
      {
        text: "Sim",
        onPress: () => updateProfile(user, { displayName: name }),
      },
    ]);
  };

  const changeEmail = () => {
    Alert.alert("Confirmar", "Quer mesmo mudar o email?", [
      {
        text: "Não",
      },
      { text: "Sim", onPress: () => updateEmail(user, email) },
    ]);
  };

  const handleLogout = () => {
    logout();
    AsyncStorage.removeItem("login");
    app.setLogged(false);
    if (app.logged) return <Text>Saindo...</Text>;
    navigation.navigate("Login");
  };

  const Card = ({ item }) => {
    const changeAvatar = () => {
      updateProfile(user, { photoURL: item.CatImage }).then(() => {
        setModalVisible(!modalVisible);
      });
    };

    return (
      <View>
        <TouchableOpacity style={styles.cat} onPress={changeAvatar}>
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

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>GATOMON</Text>
        <AppButton onPress={handleLogout} title="Logout" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal animationType="fade" visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <FlatList
            numColumns={2}
            data={avatars}
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

      <Header />

      <Text style={styles.title}>{translate("accountInfo")}</Text>

      <Text style={styles.txt}>
        {translate("name")}: {user.displayName}
      </Text>
      <Text style={styles.txt}>Email: {user.email}</Text>

      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: user.photoURL,
          }}
          style={styles.imageAvatar}
        />

        <View style={{ marginTop: 10 }}>
          <AppButton
            title="Mudar avatar"
            onPress={() => {
              loadCats();
              setModalVisible(!modalVisible);
            }}
          />
        </View>
      </View>

      <View style={styles.textInput}>
        <TextInput
          style={styles.placeholder}
          placeholder={translate("name")}
          onChangeText={(text) => {
            setName(text);
          }}
        />
      </View>
      <AppButton title="Mudar nome" onPress={changeName} />

      <View style={styles.textInput}>
        <TextInput
          style={styles.placeholder}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>
      <AppButton title="Mudar email" onPress={changeEmail} />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  headerContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: colors.primary,
    fontSize: 28,
    margin: 15,
  },
  txt: {
    fontSize: 20,
  },
  textInput: {
    width: "50%",
    borderBottomWidth: 1,
    marginTop: 15,
    marginBottom: 10,
    borderColor: colors.primary,
  },
  placeholder: {
    color: colors.primary,
    fontSize: 20,
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
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageAvatar: {
    width: 114,
    height: 80,
    margin: 10,
  },
});
