import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

import AppButton from "../../../components/AppButton";
import Footer from "../../../components/Footer";
import Loading from "../../../components/Loading";
import Info from "../../../components/Info";

import { getAuth } from "firebase/auth";

import useList from "../../../firebase/hooks/useList";
import listToArray from "../../../firebase/services/listToArray";

import colors from "../../../../assets/colors";

import { t as translate } from "i18n-js";

import { AntDesign } from "@expo/vector-icons";

export default function Collection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [cat, setCat] = useState({});
  const uid = getAuth().currentUser.uid;
  const cards = useList(`${uid}/cards/`);
  if (!cards.data) return <Loading />;
  const data = listToArray(cards.data);

  const Card = ({ item }) => {
    const getInfo = () => {
      setCat(item);
      setModalVisible(!modalVisible);
    };

    return (
      <View style={[styles.card, item.CatType === "Rare" && styles.rareCard]}>
        <Modal visible={modalVisible} transparent={true} animationType="fade">
          <View
            style={[
              styles.modalContainer,
              cat.CatType === "Rare" && styles.rareCard,
            ]}
          >
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign name="close" size={28} color="black" />
            </TouchableOpacity>
            <View style={styles.catInfoContainer}>
              <Image
                source={{
                  uri: cat.CatImage,
                }}
                style={styles.image}
              />
              <Text style={styles.catInfo}>Name: {cat.CatName}</Text>
              <Text style={styles.catInfo}>
                Description: {cat.CatDescription}
              </Text>
              <Text style={styles.catInfo}>
                Personality: {cat.CatPersonality}
              </Text>
              <Text style={styles.catInfo}>Power: {cat.CatPowerLevel}</Text>
              <Text style={styles.catInfo}>Type: {cat.CatType}</Text>
              <Text style={styles.catInfo}>Memento: {cat.Memento}</Text>
              <Image
                source={{
                  uri: cat.MementoImage,
                }}
                style={styles.image}
              />
            </View>
          </View>
        </Modal>

        <Image
          source={{
            uri: item.CatImage,
          }}
          style={styles.image}
        />
        <Text>
          {item.CatName} {item.CatPowerLevel}
        </Text>
        <Text>
          {item.CatType == "Rare" ? translate("rare") : translate("common")}
        </Text>
        <AppButton title="Info" onPress={getInfo} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Info />

      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={data}
        renderItem={Card}
        keyExtractor={(item, index) => index}
      />

      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  flatList: {
    flex: 0.9,
    margin: 10,
  },
  card: {
    maxWidth: 180,
    alignItems: "center",
    flexGrow: 1,
    flexBasis: 0,
    borderStyle: "solid",
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: colors.commonCard,
    margin: 10,
    padding: 5,
  },
  rareCard: {
    backgroundColor: colors.rareCard,
  },
  image: {
    width: 114,
    height: 80,
    marginBottom: 5,
  },
  footer: {
    flex: 0.1,
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
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
    height: 400,
    margin: 100,
  },
  closeBtn: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  catInfoContainer: {
    alignItems: "center",
  },
  catInfo: {
    marginBottom: 5,
    fontSize: 18,
  },
});
