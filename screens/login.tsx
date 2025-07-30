import Button from "@/components/Button";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = () => {
  const onLogin = () => {
    // router.navigate("/../screens/signup")

  }
  return (
    <View style={{ flex: 1 }}>
      <Image
        resizeMode="cover"
        style={{
          height: 400,
          width: "100%",
          backgroundColor: "green"
        }}

        source={require("./../app/assets/images/login.jpg")} />
      <Text style={{ textAlign: "center" }}>Login to your Account</Text>

      <View style={{
        padding: 20,
        gap: 20,
        borderRadius: 10
      }}>
        <TextInput placeholder="Enter your E-mail"
          onChangeText={(e) => console.log(e)}
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20
          }} />

        <TextInput placeholder="Enter your Password" style={{
          borderWidth: 1,
          height: 50,
          paddingHorizontal: 20
        }} />

        <Button onPress={() => {
          onLogin()
        }}>Login</Button>
        <TouchableOpacity disabled={true} style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => {
            router.push('/(auth)/authSingup');
          }} style={{ marginLeft: 5 }}>
            <Text style={{ color: 'blue' }}>Signup</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>


    </View>
  )
}
export default Login;