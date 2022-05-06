import { 
  View, 
  FlatList, 
  Image, 
  Text,
  StyleSheet,
  Button
} from 'react-native'
// import axios from 'axios'
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

import Header from "../../components/Header"
import { SafeAreaView } from 'react-native-safe-area-context';
import apiData1 from "../../services/apiData.js"

export default function Collection({ navigation }) {
  // https://neko-atsume.emshea.com/
  // const fetch = () => { //axios.get('https://api.neko-atsume.emshea.com/cats')}

  console.log(apiData1["_W"]);

  const apiData = [
    {id: 5, img: img1, name: 'Snowball', power: '80', type: 'Comum'},
    {id: 7, img: img2, name: 'Sapphire', power: '20', type: 'Raro'},
    {id: 9, img: img3, name: 'Tabitha', power: '40', type: 'Comum'},
    {id: 11, img: img4, name: 'Maple', power: '99', type: 'Comum'},
  ]

  const Card = ({ item }) => {
    return(
      <View style={styles.card}>
        <View style={styles.imageCard}>
          <Image source={item.img} style={styles.imageSize}/>
        </View>

        <View style={styles.textInfo}>
          <Text>Nome: {item.name}</Text>
          <Text>Poder: {item.power}</Text>
          <Text>Raridade: {item.type}</Text>
        </View>

        <View style={styles.moreInfoBtn}>
          <Button title='Mais informações' />
        </View>
      </View>
    );
  };

  return (
    <View>
      <Header />
      <SafeAreaView>
        {/* {apiData1()} */}
        {/* <FlatList
          style={styles.collectionList}
          data={apiData}
          renderItem={Card}
          keyExtractor={(item) => item.id}
        /> */}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  collectionList: {
    padding: 20,
  },
  card: {
    flexDirection: 'row',
  },
  textInfo: {
    flex: 2,
  },
  imageCard: {
    flex: 2,
    marginBottom: 20
  },
  imageSize: {
    width: 114,
    height: 80,
  },
  moreInfoBtn: {
    flex: 2,
  }
});