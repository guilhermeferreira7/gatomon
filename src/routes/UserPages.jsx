import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/userPages/Home";
import Account from "../pages/userPages/Account";
import Game from "../pages/userPages/Game";
import Ranking from "../pages/userPages/Ranking";
import Store from "../pages/userPages/Store";
import Collection from "../pages/userPages/Collection";

export default function UserPages() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Group>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerBackVisible: false }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: "Conta",
        }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{
          title: "Jogar",
        }}
      />
      <Stack.Screen
        name="Collection"
        component={Collection}
        options={{
          title: "Coleção",
        }}
      />
      <Stack.Screen
        name="Store"
        component={Store}
        options={{
          title: "Loja",
        }}
      />
      <Stack.Screen name="Ranking" component={Ranking} />
    </Stack.Group>
  );
}
