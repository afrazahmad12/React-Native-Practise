import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
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
      <Text style={{textAlign:"center"}}>Login to your Account</Text>

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

        <MyButton title={"Sign in"} onPress={onLogin} />
        <TouchableOpacity disabled={true} style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>Don't have an Account?</Text>
          <TouchableOpacity onPress={() => {
            router.navigate('/signup')
          }} style={{ marginLeft: 5 }}>
            <Text style={{ color: 'blue' }}>Signup</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

       <MyButton title={"flex box"} onPress={() =>{
        router.navigate("/flexBox")
       }} />
       <MyButton title={"layout"} onPress={() =>{
        router.navigate("/flexlayout")
       }} />
    </View>
  )
}
export default Login;