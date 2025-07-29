import MyButton from "@/app/components/MyButton";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { View } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.getParent()?.setOptions({ headerTitle: "Home" });
    }, [navigation]);
  return (
    <View>
       <MyButton title={"Login"} style={{marginHorizontal:20,marginTop:20}} onPress={()=>navigation.navigate("login")} />
      {/* <TouchableOpacity style={{width:100,height:60,backgroundColor:"red"}} onPress={() =>{
        navigation.navigate("login")  
      }}>
        <Text>
          Login
        </Text>
      </TouchableOpacity> */}
    </View>
  )
}
export default Home;
