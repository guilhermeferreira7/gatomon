import { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, Image, Alert } from "react-native";

import getUserLogin from "../../../services/getUserLogin";
import loadCats from "../../../services/loadCats";

import colors from "../../../../assets/colors";

import Footer from "../../../components/Footer";
import AppButton from "../../../components/AppButton";
import Loading from "../../../components/Loading";
import Info from "../../../components/Info";

import { getAuth } from "firebase/auth";

import useList from "../../../firebase/hooks/useList";
import useReference from "../../../firebase/hooks/useReference";

import { t as translate } from "i18n-js";

export default function Store() {
  const user = getAuth().currentUser;
  const [coins, setCoins] = useReference(user.uid + "/coins/");
  const [cats, setCats] = useState([]);
  const [uid, setUid] = useState("");
  const cards = useList(uid + "/cards/");

  const getCats = async () => {
    setCats(await loadCats());
  };

  useEffect(() => {
    getCats();
    getUserLogin().then((res) => {
      setUid(JSON.parse(res).uid);
    });
  }, []);

  if (cats.length === 0) return <Loading />;

  const Card = ({ item }) => {
    const value = item.CatType == "Rare" ? 1000 : 300;

    const buy = () => {
      setCoins(coins - value);
      cards.create(item);
    };

    const handleBuy = () => {
      if (coins < value) {
        Alert.alert(translate("fail"), translate("insufficientFunds"), [
          { text: "ok" },
        ]);
        return;
      }
      Alert.alert(
        translate("confirm"),
        `${translate("buyConfirm")} ${item.CatName}? ${translate(
          "value"
        )}: ${value} `,
        [
          {
            text: translate("no"),
          },
          { text: translate("yes"), onPress: buy },
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
        <Text>
          {item.CatType == "Rare" ? translate("rare") : translate("common")}
        </Text>
        <Text>Valor: {value}</Text>
        <AppButton title={translate("buy")} onPress={handleBuy} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Info />
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
