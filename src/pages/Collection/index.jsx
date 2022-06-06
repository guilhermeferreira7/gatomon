import { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import Header from "../../components/Header";

import getUserLogin from "../../services/getUserLogin";
import useList from "../../firebase/hooks/useList";
import colors from "../../assets/colors";

export default function Collection() {
  const cards = useList(uid + "/cards/");
  console.log("--");
  console.log(cards);
  const [uid, setUid] = useState("");
  const [cats, setCats] = useState([]);

  const loadCats = () => {
    setCats(cards.data);
  };

  useEffect(() => {
    getUserLogin().then((res) => {
      setUid(res.uid);
    });
    loadCats();
  }, []);

  const Card = ({ item }) => {
    return (
      <View>
        <Text>{item.CatName}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        numColumns={2}
        data={cats}
        renderItem={Card}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
