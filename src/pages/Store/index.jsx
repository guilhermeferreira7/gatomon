import { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, Image, Alert } from "react-native";

import getUserLogin from "../../services/getUserLogin";
import loadCats from "../../services/loadCats";

import colors from "../../assets/colors";

import Footer from "../../components/Footer";
import GameInfo from "../../components/GameInfo";
import AppButton from "../../components/AppButton";

import useList from "../../firebase/hooks/useList";
import Loading from "../../components/Loading";

export default function Store() {
  const [cats, setCats] = useState([]);
  const [uid, setUid] = useState("");
  const cards = useList(uid + "/cards/");

  const getCats = async () => {
    setCats(await loadCats());
  };

  useEffect(() => {
    getCats();
    getUserLogin().then((res) => {
      setUid(res.uid);
    });
  }, []);

  if (cats.length === 0) return <Loading>loading...</Loading>;

  const Card = ({ item }) => {
    const value = item.CatType == "Rare" ? 1000 : 300;

    const buy = () => {
      cards.create(item);
    };

    const handleBuy = () => {
      Alert.alert(
        "Confirmar",
        `Quer mesmo comprar a carta ${item.CatName} por $ ${value}`,
        [
          {
            text: "Não",
          },
          { text: "Sim", onPress: buy },
        ]
      );
    };

    return (
      <View style={[styles.card, item.CatType === "Rare" && styles.rareCard]}>
        <Image
          source={{
            uri: item.CatImage,
          }}
          style={styles.image}
        />
        <Text>
          {item.CatName} {item.CatPowerLevel}
        </Text>
        <Text>{item.CatType == "Rare" ? "Raro" : "Comum"}</Text>
        <Text>Valor: {value}</Text>
        <AppButton title="Comprar" onPress={handleBuy} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <GameInfo />

      <View>
        <Text style={styles.text}>Próxima atualização em 3h 20m 10s</Text>
      </View>

      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={cats}
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
});
