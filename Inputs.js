import { StatusBar } from "expo-status-bar";
import React, { useState } from "react"

import {
  CheckBox,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";

export default function InputBox() {
  const [pulls, setPulls] = useState(0);
  const [itemType, setItemType] = useState("");
  const [banner, setBanner] = useState("");
  const [value, setValue] = useState(null);
  function isNumeric(num) {
    return !isNaN(num);
  }


  function checkItemType(input) {
    if (
      banner == "standardBanner" &&
      (input == "5*character" || input == "5*starweapon")
    ) {
      setItemType(input);
    } else {
      alert(
        "sorry but this item type is not compatible with the chosen banner"
      );
      console.log(itemType);
      setItemType("5*limitedcharacter");
    }
  }

  function verifyPulls(userInput) {
    var previousInput = pulls
    if (isNumeric(userInput)) {
      setPulls(userInput);
    } 
    else {
      alert("Hi");
      setPulls(previousInput);
    }
  }

  return (
    <View style={styles.container1}>
      <View style={styles.divider}></View>
      <View style ={styles.containerVertical}>
      <Text style = {styles.text2}>Selected Properties</Text>
      <View style={styles.buttonContainer}>
      <TextInput
            placeholder={banner}
            editable ={false}
            style = {styles.input2}/>
      <TextInput
            placeholder={itemType}
            editable ={false}
            style = {styles.input2}/>
      </View>
      </View>
      <SafeAreaView>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text2}> Number of pulls</Text>
          <TextInput
            keyboardType={"numeric"}
            placeholder="0"
            style={styles.input}
            onChangeText={(value) => setPulls(value)}
          />
        </SafeAreaView>
      </SafeAreaView>
      <View style={styles.defaultView}>
        <Text style={styles.text2}>Banner Type</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
          style = {styles.buttonStyle}
          onPress = {()=>setBanner("Standard")}>
            <Text>Standard</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
          
          <TouchableOpacity 
          style = {styles.buttonStyle}
          onPress = {()=>setBanner("Event")}>
            <Text>Event</Text>
          </TouchableOpacity>
          <View style={styles.divider}></View>
          
          <TouchableOpacity 
          style = {styles.buttonStyle}
          onPress = {()=>setBanner("Weapon")}>
            <Text>Weapon</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.text2}>Item type</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  buttonStyle: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: 'flex-start',
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "25%",
    textAlign: "center",
  },
  buttonContainer: {
    padding: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
  },
  container1: {
    top: "35%",
    position: "absolute",
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  defaultView: {
    textAlign: "center",
    alignItems: "center",
    padding:10,
  },
  input2: {
    backgroundColor: 'white',
    width: '40%',
    height: 40,
    textAlign: "left",
    color: "black",
    borderRadius: 8,
    textAlign: "center",
    marginRight: 12,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    textAlign: "left",
    paddingLeft: 10,
    margin: 12,
    color: "black",
    borderRadius: 8,
    width: 80,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerVertical: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  divider: {
    width: 10,
    height: 20,
  },

  title: {
    color: "white",
    fontSize: 30,
  },
});
