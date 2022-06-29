import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/userPages/Home";
import Account from "../pages/userPages/Account";
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
    </Stack.Group>
  );
}
