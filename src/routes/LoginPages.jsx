import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/signUpPages/Login";
import SetInfo from "../pages/signUpPages/SetInfo";
import CreateAccount from "../pages/signUpPages/CreateAccount";

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
