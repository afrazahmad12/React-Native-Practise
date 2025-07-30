import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MyButton from '../app/Components/MyButton'

const Signup = () => {
  const router = useRouter()
  const onRegister = () => {
    router.navigate("/(auth)/authLogin")
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
      <View style={{
        padding: 20,
        gap: 20,
        borderRadius: 10
      }}>
        <TextInput placeholder="Enter your Name"
          onChangeText={(e) => console.log(e)}
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20
          }} />
        <TextInput placeholder="Enter your E-mail"
          onChangeText={(e) => console.log(e)}
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20
          }} />

        <TextInput placeholder="Enter your Password"
          onChangeText={(e) => console.log(e)}
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20
          }} />

        <TextInput placeholder="Re-Enter Password"
          onChangeText={(e) => console.log(e)}
          style={{
            borderWidth: 1,
            height: 50,
            paddingHorizontal: 20
          }} />

      </View>

      <MyButton title={"Register"} onPress={onRegister} />

      <TouchableOpacity disabled={true} style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text> I have an account!</Text><TouchableOpacity onPress={() => {
          router.navigate("/(auth)/authLogin")
        }} style={{ marginLeft: 5 }} >
          <Text style={{}}>
            login
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>

    </View>
  )
}

export default Signup