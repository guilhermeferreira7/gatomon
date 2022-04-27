import { View, StyleSheet, ScrollView, Button} from 'react-native';
import Header from '../../components/Header';

export default function Home({ navigation }) {
  //Extrair essas funcoes em uma só?
  const collection = () => {
    navigation.navigate("Collection")
  };
  
  const play = () => {
    navigation.navigate("Game")
  };
  
  const store = () => {
    navigation.navigate("Store")
  };
  
  const ranking = () => {
    navigation.navigate("Ranking")
  };

  return (
    <ScrollView>
      <Header />

      <View style={styles.buttonStyle}>
        <Button title="Jogar" onPress={play} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Coleção" onPress={collection} />
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Loja" onPress={store} />
      </View>
      <View style={styles.buttonStyle} onPress={ranking}>
        <Button title="Ranking" onPress={ranking} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: "40%",
    marginTop: 10,
    alignSelf: "center"
  }
});