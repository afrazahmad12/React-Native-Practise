import { Stack } from "expo-router";
import React from "react";



const RootLayout = () => {
  return (
    <Stack initialRouteName="flexlayout" screenOptions={{ headerShown: false }}>
      {/* This line is enable for drawer and bottom tab navigation */}
      {/* <Stack.Screen name="(drawer)"  options={{ headerShown: false }} /> */}
      <Stack.Screen name="login" />
      <Stack.Screen name="flexlayout" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="flexBox" />
    </Stack>
  )
}
export default RootLayout;
