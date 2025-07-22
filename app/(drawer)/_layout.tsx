import { Drawer } from 'expo-router/drawer';
import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const DrawerRoot = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer />
    </GestureHandlerRootView>
  )
}
export default DrawerRoot;
