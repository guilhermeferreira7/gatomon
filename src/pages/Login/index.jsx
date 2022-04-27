import { View, Button, TextInput, StyleSheet, Text } from 'react-native'
import React from "react"
import Header from '../../components/Header'

export default function Login({ navigation }) {
  const homePage = () => {
    navigation.navigate("Home")
  }

  const createAccount = () => {
    navigation.navigate("CreateAccount")
  }

  return (
    <View styles={styles.center}>
      <Header title="Login" />

      <View style={styles.inputs}>
        <TextInput
          placeholder="Nome de usuário"
        />
      </View>
      <View style={styles.inputs}>
        <TextInput
          placeholder="Senha"
        />
      </View>
      <View style={styles.inputs}>
        <Button title='Login' onPress={homePage} />
      </View>

      <View style={styles.register}>
        <Text>Não tem conta? </Text>
        <Button title='Cadastrar' onPress={createAccount}/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  inputs: {
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
  },
  register: {
    marginTop: 20,
    alignSelf: "center"
  }
});
