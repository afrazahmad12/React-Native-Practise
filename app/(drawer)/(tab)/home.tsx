import MyButton from "@/app/Components/MyButton";
import { router, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { View } from "react-native";
const Home = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({ headerTitle: "Home" });
  }, [navigation]);
  return (
    <View>
      <MyButton title={"Login"} style={{ marginHorizontal: 20, marginTop: 20 }} onPress={() => {
        // navigation.navigate("login")
        // router.push('/login'); // ✅ still works
        router.push('/(auth)/authSingup');


        }} />
      {/* <Link href="auth/login">
        <Text>Login</Text>
      </Link>
   */}
    </View>
  )
}
export default Home;
