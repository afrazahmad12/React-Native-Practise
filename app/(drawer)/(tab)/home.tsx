import Button from "@/components/Button";
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
      <Button onPress={() => {
        router.push('/(auth)/login');
      }}>Login</Button>

    </View>
  )
}
export default Home;
