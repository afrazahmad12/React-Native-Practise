import { useRouter } from "expo-router";
import React from "react";
import { Image, TextInput, View } from "react-native";
import MyButton from "./components/MyButton";

const Login = () => {
  const router = useRouter()
  const onLogin = () => {
    router.navigate("/signup")

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

        source={require("@/assets/images/login.jpg")} />

      <View style={{
        padding: 20,
        gap: 20,
        borderRadius: 10
      }}>
        <TextInput placeholder="Enter your E-mail" 
         onChangeText={ (e) => console.log(e)}
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
        <MyButton title={"Login"} onPress={onLogin} />
      </View>
    </View>
  )
}
export default Login;
