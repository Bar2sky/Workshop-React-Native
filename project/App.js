import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TouchableOpacity, TextInput, StyleSheet, Text, View, Button } from 'react-native';
import React, { UseState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
      <Text>Titre</Text>
      </View>
      <Button title="Bouton" onPress={() => console.log('Bonjour.')} />
      <StatusBar style="auto" />
      {/* <View style={styles.edit_zone}> */}
        {/* <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Type here..."/> */}
        <TextInput style={styles.edit_zone} placeholder="Type here..."/>
      {/* </View> */}
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
  title: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 20,
  },
  edit_zone: {
    borderColor: 'black',
    backgroundColor: 'lightblue',
    height: 35,
    borderWidth: 1,
    width: '80%',
    position: 'absolute',
    padding: 5,
  },
});
