import { useNavigation } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const DrawerNav = () => {
  const navigation = useNavigation();
  return (
   <View>
    <Text>Drawer</Text>
   </View>
  )
}
export default DrawerNav;
