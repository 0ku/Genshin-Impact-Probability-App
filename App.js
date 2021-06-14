import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputBox from './Inputs';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Genshin Probability Calculator</Text>
      <InputBox/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: "bold",
  }
});


