import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('Manuj');

  const [person, setPerson] = useState({ name: 'Muskan', age: 22 });

  const clickHandler = () => {
    setName("Grover");
    setPerson({ name: "Manuj", age: 18 });
  }

  return (
    <View style={styles.container}> 
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View styles={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop: 100,
  },
});
