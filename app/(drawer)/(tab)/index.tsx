import { useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.getParent()?.setOptions({ headerTitle: "Home" });
    }, [navigation]);
  return (
    <View>
      <Text>Home222</Text>
      <TouchableOpacity onPress={() =>{
        // navigation.navigate("Settings")  
      }}>
        <Text>
          Design
        </Text>
      </TouchableOpacity>
    </View>
  )
}
export default Home;
