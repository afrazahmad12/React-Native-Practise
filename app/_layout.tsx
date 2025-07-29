import { Stack } from "expo-router";
import React from "react";



const RootLayout = () => {
  return (
    <Stack initialRouteName="(drawer)" screenOptions={{ headerShown: false }}>
    
      
      <Stack.Screen name="foodDelivery" />
      <Stack.Screen name="Screens" />
      <Stack.Screen name="flexlayout" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="flexBox" />
      <Stack.Screen name="Flatlist" />
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
    </Stack>
  )
}
export default RootLayout;
