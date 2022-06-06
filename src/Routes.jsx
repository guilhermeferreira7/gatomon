import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Account from "./pages/Account";
import CreateAccount from "./pages/CreateAccount";
import Game from "./pages/Game";
import Login from "./pages/Login";
import Ranking from "./pages/Ranking";
import Store from "./pages/Store";
import Collection from "./pages/Collection";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            title: "Conta",
          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{
            title: "Criar conta",
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
