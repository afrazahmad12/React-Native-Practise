import { Stack } from "expo-router";
import React from "react";



const RootLayout = () => {
  return (
    <Stack>
      {/* This line is enable for drawer and bottom tab navigation */}
      {/* <Stack.Screen name="(drawer)"  options={{ headerShown: false }} /> */}
      <Stack initialRouteName="login" screenOptions={{ headerShown: false }} />
      <Stack.Screen name="flexlayout" />
     
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
       <Stack.Screen name="flexBox" />





    </Stack>
  )
}
export default RootLayout;
