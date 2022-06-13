import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import SetInfo from "../pages/SetInfo";
import CreateAccount from "../pages/CreateAccount";

export default function LoginPages() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Group>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          title: "Criar conta",
        }}
      />
      <Stack.Screen
        name="SetInfo"
        component={SetInfo}
        options={{
          headerBackVisible: false,
          title: "Criar conta",
        }}
      />
    </Stack.Group>
  );
}
