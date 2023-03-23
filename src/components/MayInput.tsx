import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

function MyInput() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <SafeAreaView>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          onChangeText={handleSearch}
          value={searchTerm}
          placeholder="Ara..."
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input_container: {
    backgroundColor: '#d3d3d3',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
});

export default MyInput;
