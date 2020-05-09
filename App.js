import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'Manuj', key: '1' },
    { name: 'Muskan', key: '2' },
    { name: 'Rajan', key: '3' },
    { name: 'Akshit', key: '4' },
    { name: 'Shivam', key: '5' },
    { name: 'Yashbeer', key: '6' },
    { name: 'Luv', key: '7' },
    { name: 'Mayank', key: '8' },
  ]);

  const pressHandler = (item) => {
    console.log(item);
  }

  return (
    <View style={styles.container}>
      
      <FlatList 
        numColumns = {2}
        data = {people}
        renderItem = {({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40, 
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'skyblue',
    fontSize: 24,
    marginRight: 30,
  }
});
