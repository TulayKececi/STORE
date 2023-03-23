import React from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MyInput from "./components/MayInput";
import patika from './patika.json'


function App() {
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.image_container}>
      <Image style={styles.image}
        source={{ uri: item.imgURL }}
      ></Image>
      <Text style={styles.text_title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>PATIKA STORE</Text>
        <MyInput />
      </View>
      <View>
        <FlatList
          data={patika}
          renderItem={renderItem}
          numColumns={2} // 2 sütun
          columnWrapperStyle={styles.row}

        >
        </FlatList>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    margin: 5,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'magenta',
  },
  image_container: {
    backgroundColor: '#d3d3d3',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  text_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    width: 130,
  },
  price: {
    color: 'gray',
  }
});

export default App;