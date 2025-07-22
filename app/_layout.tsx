import { Stack } from "expo-router";
import React from "react";



const RootLayout = () => {
  return (
    <Stack>
      {/* This line is enable for drawer and bottom tab navigation */}
      {/* <Stack.Screen name="(drawer)"  options={{ headerShown: false }} /> */}
      <Stack screenOptions={{headerShown:false}}/>
      <Stack.Screen name ="index" />
      <Stack.Screen name ="login" />
      <Stack.Screen name ="signup" />

    


    </Stack>
  )
}
export default RootLayout;
