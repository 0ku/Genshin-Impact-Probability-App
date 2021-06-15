import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import InputBox from './Inputs';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>Genshin Impact Probability Calculator</Text>
      <InputBox/>
      <StatusBar style="auto"/>
    </SafeAreaView>
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
    flexWrap:'wrap',
    position: 'absolute',
    textAlign: 'center',
    top: '25%',
    color: 'white',
    fontSize: 25,
    fontWeight: "bold",
  }
});

