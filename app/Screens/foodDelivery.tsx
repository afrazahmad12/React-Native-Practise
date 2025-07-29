
import Icon from "@expo/vector-icons/Entypo"
import { Image, ScrollView, Text, View } from "react-native"
const App = () => {
  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <View
        style={{
          // flexDirection: "row",
          // alignItems: "center",
          marginTop: 40,
          marginHorizontal: 20
        }}>
        <View>
          <Image style={{ height: 50, width: 50 }}
            source={require('../../assets/images/menu.png')} />
           
          <View style={{ marginHorizontal:"45%",marginBlockEnd:10 }}>
             <Icon name="magnifying-glass" size={30} />
            
          </View>
        </View>


        <View style={{
          paddingHorizontal: 0,
          marginTop: 0,
        }}>
          <Text style={{
            fontSize: 30,
            fontWeight: "bold",

          }}>Food That</Text>
          <Text style={{
            fontSize: 30,
            fontWeight: "bold",
          }}>meets your need</Text>
        </View>

        <View style={{
          paddingHorizontal: 20,
          marginTop: 50
        }}>
          <Text>
            Food
          </Text>

        </View>
      </View>

    </ScrollView>
  )

}



export default App