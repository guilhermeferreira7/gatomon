import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserPages from "./UserPages";

import AppContext from "../contexts/AppContext";
import LoginPages from "./LoginPages";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const app = useContext(AppContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {app.logged ? UserPages({}) : LoginPages({})}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
