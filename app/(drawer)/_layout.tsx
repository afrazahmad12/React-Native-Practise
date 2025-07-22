import { Drawer } from 'expo-router/drawer';
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen name="(tab)" options={{title: "Home"}} />
      </Drawer>
    </GestureHandlerRootView>
  )
}
export default DrawerRoot;
