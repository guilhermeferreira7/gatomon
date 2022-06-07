import { View, StyleSheet, Text, FlatList, Image } from "react-native";

import AppButton from "../../components/AppButton";

import useList from "../../firebase/hooks/useList";
import listToArray from "../../firebase/services/listToArray";

import colors from "../../assets/colors";

import { getAuth } from "firebase/auth";
import Footer from "../../components/Footer";
import GameInfo from "../../components/GameInfo";

export default function Collection() {
  const uid = getAuth().currentUser.uid;
  let cards = useList(uid + "/cards/").data;
  if (!cards) return <Text>Loading...</Text>;

  cards = listToArray(cards);

  const Card = ({ item }) => {
    const getInfo = () => {
      console.log("info");
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
        <AppButton title="Info" onPress={getInfo} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <GameInfo />

      <FlatList
        style={styles.flatList}
        numColumns={2}
        data={cards}
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
});
