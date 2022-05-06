import { 
  View, 
  FlatList, 
  Image, 
  Text,
  StyleSheet,
  Button
} from 'react-native'

import { useState } from 'react'
// import axios from 'axios'
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

import Header from "../../components/Header"
import { SafeAreaView } from 'react-native-safe-area-context';
// import apiData from "../../services/apiData.js"

export default function Collection({ navigation }) {
  // https://neko-atsume.emshea.com/
  // const fetch = () => { //axios.get('https://api.neko-atsume.emshea.com/cats')}

  const [cats, setCats] = useState()
  const getData = async () => {
    try {
      const result = await api.get("https://api.neko-atsume.emshea.com/cats");
      setCats(result.data)
    } catch (err) {
      console.error(err);
    }
  };
  getData();


  // const cats = apiData
  console.log('---');
  console.log('---');
  console.log('---');
  console.log('---');
  // console.log(cats[0]);

  const Card = ({ item }) => {
    return(
      <View style={styles.card}>
        <View style={styles.imageCard}>
          <Image 
            source={{
              uri: item.CatImage,
            }} 
            style={styles.imageSize}
          />
        </View>

        <View style={styles.textInfo}>
          <Text>Nome: {item.CatName}</Text>
          <Text>Poder: {item.CatPowerLevel}</Text>
          <Text>Raridade: {item.CatType == 'Rare' ? 'Raro' : 'Comum'}</Text>
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
        <FlatList
          style={styles.collectionList}
          data={cats}
          renderItem={Card}
          keyExtractor={(item) => item.catId}
        />
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