import React from 'react'
import { StyleSheet, View } from 'react-native'

const flexlayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
    </View>
  )
}
const styles=StyleSheet.create({
  
  container: {
    flexDirection:"row",
    flex:1,
    backgroundColor:"orange",
    // alignItems:"center",
    justifyContent:"center"
  },
  box1: {
    backgroundColor:"red",
    height:50,
    width:50
  },
  box2: {
    backgroundColor:"green",
    height:50,
    width:50
  },
  box3: {
    backgroundColor:"blue",
    height:50,
    width:50
  },
})

export default flexlayout