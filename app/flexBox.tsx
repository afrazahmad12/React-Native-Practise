import React from 'react'
import { StyleSheet, View } from 'react-native'

const flexBox = () => {
  return (
    <View style={styles.main}>
      {/* <View style={styles.main}>
      </View> */}
      <View style={styles.box1}>

        {[1, 12, 3].map((item, index) => {

          return (
            <View style={[styles.innerBox3, { backgroundColor: index == 0 ? "yellow" : index == 1 ? "pink" : "purple", marginLeft: index == 0 ? 10 : 0, marginRight: 10 }]}>
            </View>
          )
        })}

      </View>

      <View style={styles.box2}>
      </View>
      <View style={styles.box3}>
      </View>
    </View>



  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,

  },
  box1: {
    flex: 3, backgroundColor: "orange", flexDirection: "row"
  },
  box2: {
    flex: 1, backgroundColor: "red"
  },
  box3: {
    flex: 1, backgroundColor: "blue"
  },
  innerBox1: {
    flex: 1,
    backgroundColor: "black",
    margin: 10
  },
  innerBox2: {
    flex: 1,
    backgroundColor: "darkgreen",
    margin: 10
  },
  innerBox3: {
    flex: 1,
    backgroundColor: "blue",
    marginVertical: 10
  }


})

export default flexBox