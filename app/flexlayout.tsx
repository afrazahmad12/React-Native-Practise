import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const flexlayout = () => {
  const Header = () => {
    return (
      <View style={styles.header}>
        <Text> Header App</Text>

      </View>
    )
  }
  const Boxes = () => {
    return (
      < View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>
              Box1
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>
              Box2
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>
              Box3
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>
              Box3
            </Text>
          </View>
        </View>
      </View>

    )
  }
  return (
    <View style={styles.container}>
      {/* <Header />
      <View style={{ flexDirection: 'row', margin: 10, }} >
        <View style={{ backgroundColor: "red", height: 150, width: '49%', marginRight: '2.5%' }} />
        <View style={{ backgroundColor: "green", height: 150, width: '49%' }} />
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 10, marginRight: 10, }} >
        <View style={{ backgroundColor: "red", height: 150, width: '49%', marginRight: '2.5%' }} />
        <View style={{ backgroundColor: "green", height: 150, width: '49%', justifyContent: 'center', alignItems: 'center' }} >
          <Text>Hello</Text>
        </View>
      </View> */}

    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
  },
  header: {
    width: "100%",
    height: "15%",
    backgroundColor: "#c8c8c8",
    justifyContent: "center",
    alignItems: "center",

  },
  boxContainer: {
    width: "100%",
    height: "85%",
    backgroundColor: "black",
    padding: 5,
    flexDirection: 'row',
    flexWrap: "wrap"
  },
  box: {
    width: "50%",
    height: "50%",
    padding: 5,
    // backgroundColor: "green"

  },

  inner: {
    flex: 1,
    backgroundColor: "#c8c8c8",
    alignItems: "center",
    justifyContent: "center",

  }
  // box1: {
  //   backgroundColor: "lightgrey",
  //   height: 100,
  // },
  // box2: {
  //   backgroundColor: "red",
  //   height: 350,
  //   width: 10,
  //   margin: 10,
  //   marginRight: 5
  // },
  // box3: {
  //   backgroundColor: "red",
  //   height: 350,
  //   width: "auto",
  //   margin: 10,
  //   marginLeft: 5,
  // },
  // box4: {
  //  backgroundColor:"red",
  // //  flexDirection:"column-reverse",
  //   height:350,
  //   width:210,
  //   margin:10,

  // },
  // box5: {
  //  backgroundColor:"red",
  //   height:350,
  //   width:210,
  //   margin:10,
  // },

})

export default flexlayout