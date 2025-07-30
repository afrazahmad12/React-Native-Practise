import { Stack } from "expo-router";
import React from "react";



const Authlayout = () => {
  return (
    <Stack initialRouteName="authLogin" screenOptions={{ headerShown: false }}>
  
      <Stack.Screen name="authLogin" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="login" />
    </Stack>
  )
}
export default Authlayout;
