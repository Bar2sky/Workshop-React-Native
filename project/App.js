import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TouchableOpacity, TextInput, StyleSheet, Text, View, Button } from 'react-native';
import React, { UseState } from 'react';
import MyComponent from './composant'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Titre</Text>
        <MyComponent />
      </View>
      <Button title="Bouton" onPress={() => console.log('Bonjour.')} />
      <StatusBar style="auto" />
      <TextInput style={styles.edit_zone} placeholder="Type here..."/>
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
    marginBottom: 70,
    paddingVertical: 16,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    width: '40%',
    fontWeight: 'bold',
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
