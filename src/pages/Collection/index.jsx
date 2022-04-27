import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'

export default function Collection({ navigation }) {
  const apiData = []

  const Card = ({ item }) => {
    return(
      <View>
        <Image />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={apiData}
        renderItem={Card}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
};