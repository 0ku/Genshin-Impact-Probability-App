import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import InputBox from './Inputs';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/genshin-logo.png')}
      style={{width: 325, height: 140.4, position: 'absolute',top:'7%'}}/>
      <Text style = {styles.title}>Probability Calculator</Text>
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
    top: '24%',
    color: 'white',
    fontSize: 25,
    fontWeight: "bold",
  }
});


