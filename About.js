import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {WebView,View,Image, StyleSheet, Text, SafeAreaView, Linking } from 'react-native';
import InputBox from './Inputs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavButton,CustomButton2 } from './Buttons';

export default function About() {
    function redirect() {
        const link = 'https://docs.google.com/document/d/1xIEh-dEgFWUDUmnXF6yCtumxEVIhAWgtDYiGvGoxpTk/edit'
        Linking.openURL(link).catch((err) => console.error('An error occurred', err))
    }
    return (
        <View style = {styles.mainContainer}>
            <NavButton/>
            <View style = {styles.container1}>
            <Text style={styles.description}>Thanks for using my Genshin Impact Probability Calculator! 
            {'\n'}{'\n'}Please keep in mind that this calculator does not account for 'soft pity' {'\n'}(a speculation which suggests that a player's probability of getting a 5* item increases signifantly past 70 pulls).
            {'\n'}{'\n'}If you happen to be interested in learning about the math involved, you are more than welcome to take a look at my paper.
            </Text>
            <CustomButton2 text = "Document" color = "#369af7" onPress={()=>redirect()}/>
            <Text style={styles.description}>
                Lastly, if you happen to find any problems/errors or any feedback/comments, feel free to add me on Discord.
            </Text>
            <View style = {styles.rowContainer}>
            <Image source={require('./assets/yukinoEDIT1.jpg')}
      style={{width: 75, height: 75,borderRadius:50}}/>
                <CustomButton2 disabled = {true} text = "Discord" color = "#369af7" onPress={()=>redirect()}/>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#2E2E2E',
    },
    description: {
        color: 'white',
        fontSize: 18,
        textAlign: 'left',
        padding: 20
    },
    container1: {
        position: 'absolute',
        top: '13%',
        alignItems: 'center'
    },
    rowContainer: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})