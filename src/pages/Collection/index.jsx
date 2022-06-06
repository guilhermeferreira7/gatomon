import { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import Header from "../../components/Header";

import useList from "../../firebase/hooks/useList";
import colors from "../../assets/colors";
import { getAuth } from "firebase/auth";

export default function Collection() {
  const uid = getAuth().currentUser.uid;
  const cards = useList(uid + "/cards/").data;
  console.log(cards);

  // const result = Object.entries(cards);
  // console.log(result);

  const Card = ({ item }) => {
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        numColumns={2}
        data={cards}
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
