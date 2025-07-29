import React from 'react';
import { FlatList, Text, View } from 'react-native';

const Flatlist = () => {
  return (
    <View >
      <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 3, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 3, 9, 2, 1, 2, 3, 4, 5, 6, 7, 8, 5, 4, 3, 9, 2,]}
        contentContainerStyle={{ marginTop: 40 }}
        numColumns={3}
        ListHeaderComponent={<View style={{width:"100%",height:200,backgroundColor:"blue"}}></View>}
        renderItem={({ item }) => {
                                                                   

          return (
            <View
              style={
                {
                  width: 100,
                  height: 100,
                  backgroundColor: "red",
                   marginBottom: 20,
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center"


                }} ><View />
              <Text>{item}</Text>
            </View>


          )

        }} />
    </View>

  )
}

export default Flatlist