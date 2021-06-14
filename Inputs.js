import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { CheckBox,TextInput,StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function InputBox() {
    var b1,b2,b3;
    b1 = 1;
    b2 = 2;
    b3 = 3;
    const [pulls,setPulls] = useState(0);
    const [isEventBanner,setEventBanner] = useState(false);
    const [isWeaponBanner, setWeaponBanner] = useState(false);
    const [isStandardBanner,setStandardBanner] = useState(false);

    function checkInput(banner) {
      var set = true;
      console.log("hi");
      if (banner == 1) { //1 for Standard banner
        console.log(isEventBanner,isWeaponBanner);
        if ((isEventBanner == false) && (isWeaponBanner == false)) {
          setStandardBanner(set);
          console.log('HIss')
        }
      }
      else if (banner == 2) {//2 for Event banner
        if ((isStandardBanner == false) && (isWeaponBanner == false)) {
          setEventBanner(set);
        }
      }
      else if (banner == 3) {//2 for Weapon banner
        if ((isStandardBanner == false) && (isEventBanner == false)) {
          setWeaponBanner(set);
        }
      }
    }
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.text}> Number of pulls</Text>
        <TextInput keyboardType = {"numeric"} placeholder = "0" style = {styles.input}>
        </TextInput>
        </View>
        <View style={styles.container2}>
        <View style={styles.checkBoxContainer}>
        <Text style={styles.text}> Standard Banner</Text>
          <CheckBox style = {styles.checkBox} value={isStandardBanner} onValueChange = {b1 => checkInput(b1)}></CheckBox>
        </View>
        <View style={styles.checkBoxContainer}>
        <Text style={styles.text}> Event Banner</Text>
          <CheckBox style = {styles.checkBox} value={isEventBanner} onValueChange = {b2=>checkInput(b2)}></CheckBox>
        </View>
        <View style={styles.checkBoxContainer}>
        <Text style={styles.text}> Weapon Banner</Text>
          <CheckBox style = {styles.checkBox} value={isWeaponBanner} onValueChange = {b3 =>checkInput(b3)}></CheckBox>
        </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    text: {
      color: 'white',
    }, 
    container2: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
        height: 40,
        textAlign: 'left',
        paddingLeft: 10,
        margin: 12,
        borderWidth: 1,
        color: 'white',
        borderRadius: 8,
    },
    container: {
      marginTop: 10,
      flexDirection: 'row',
      backgroundColor: '#2E2E2E',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkBoxContainer: {
      margin: 5,
      flexDirection: 'row',
      backgroundColor: '#2E2E2E',
      alignItems: 'center',
    },
    checkBox: {
      alignSelf: 'center',
      height: 30,
      width: 30,
      padding: 5,
    },
  
    title: {
      color: 'white',
      fontSize: 30,
    }
  });