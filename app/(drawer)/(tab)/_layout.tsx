import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const Tabroot = () => {
  return (
    <Tabs initialRouteName="index" screenOptions={{ headerShown: false }} >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }} />

      <Tabs.Screen name="about" options={{
        title: "About Us222", tabBarIcon: ({ color, size }) => {
          return (
            <View style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              backgroundColor: "blue",
              bottom: 20,
              justifyContent: "center",
              alignItems: "center"
            }}>
              <AntDesign size={28} name="contacts" color={"white"} />
            </View>
          )
        }
      }} />
      <Tabs.Screen name="profile" options={{
        title: "Profile",
        tabBarIcon: ({ color }) => (
          <FontAwesome size={28} name="user-circle-o" color={color} />
        )
      }} />
    </Tabs>
  )
}
export default Tabroot;
