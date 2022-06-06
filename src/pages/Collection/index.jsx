import { View, StyleSheet } from "react-native";

import Header from "../../components/Header";

import getUserLogin from "../../services/getUserLogin";
import useList from "../../firebase/hooks/useList";
import colors from "../../assets/colors";

export default function Collection() {
  const [uid, setUid] = useState("");
  const cards = useList(`${uid}/cards/`);
  console.log(uid);
  console.log(cards.data);

  useEffect(() => {
    getUserLogin().then((res) => {
      setUid(res.uid);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
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
