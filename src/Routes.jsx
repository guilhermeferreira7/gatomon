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
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => {
              return <Button onPress={() => {}} title={"logout"}></Button>;
            },
          }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            title: "Conta",
            headerRight: () => {
              return <Button onPress={() => {}} title={"logout"}></Button>;
            },
          }}
        />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            title: "Jogar",
            headerRight: () => {
              return <Button onPress={() => {}} title={"logout"}></Button>;
            },
          }}
        />
        <Stack.Screen
          name="Collection"
          component={Collection}
          options={{
            title: "Coleção",
            headerRight: () => {
              return <Button onPress={() => {}} title={"logout"}></Button>;
            },
          }}
        />
        <Stack.Screen
          name="Store"
          component={Store}
          options={{
            title: "Loja",
            headerRight: () => {
              return <Button onPress={() => {}} title={"logout"}></Button>;
            },
          }}
        />
        <Stack.Screen
          name="Ranking"
          component={Ranking}
          options={{
            headerRight: () => {
              return <Button onPress={() => {}} title={"logout"}></Button>;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
