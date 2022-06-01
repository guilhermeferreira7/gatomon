import { View, StyleSheet } from "react-native";

import Header from "../../components/Header";

export default function Collection() {
  return (
    <View>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  collectionList: {
    margin: 10,
  },
  card: {
    flexDirection: "row",
  },
  textInfo: {
    flex: 2,
  },
  imageCard: {
    flex: 2,
    marginBottom: 20,
  },
  imageSize: {
    width: 114,
    height: 80,
  },
  moreInfoBtn: {
    flex: 2,
  },
});
