import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {CustomButton1} from "./Buttons";
import {CustomButton2} from "./Buttons";
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
  const [probability,setProbability] = useState(0);
  function isNumeric(num) {
    return !isNaN(num);
  }

  function calculateProbability() {
    var probability = 0;
    if (isNumeric(pulls) == false) {
      alert("You have an invalid pull input")
      return
    }
    if (itemType == "5* Character" && banner == "Standard") {
      var pityPulls = Math.floor(pulls/90)
      var tempPulls = pulls - pityPulls
      probability += (1-Math.pow((10/15),pityPulls))
      probability += (1-Math.pow((6/1000),tempPulls))
      setProbability(probability)
      return
    }
  }

  function checkItemType(input) {
    var incompatible = "Sorry, the item you have chosen is incompatible with the banner you have picked"
    if (((input == "5* Character") || (input == "5* Specific Character") || (input == '5* Limited Character')) && (banner == "Weapon")) {
      alert(incompatible)
    }
    else if (((input == "5* Weapon")||(input == "5* Specific Weapon")) && (banner == "Event")) {
      alert(incompatible)
    }
    else if ((input == '5* Limited Character') && (banner != 'Event')) {
      alert(incompatible)
    }
    else {
      setItemType(input)
    }
  }

  function checkBanner(input) {
    var incompatible = "Sorry, the item you have chosen is incompatible with the banner you have picked"
    if (((itemType == "5* Character") || (itemType == "5* Specific Character") || (itemType == '5* Limited Character')) && (input == "Weapon")) {
      alert(incompatible)
    }
    else if (((itemType == "5* Weapon")||(itemType == "5* Specific Weapon")) && (input == "Event")) {
      alert(incompatible)
    }
    else if ((itemType == '5* Limited Character') && (input != 'Event')) {
      alert(incompatible)
    }
    else {
      setBanner(input)
    }
  }

  function verifyPulls(userInput) {
    var previousInput = pulls;
    if (isNumeric(userInput)) {
      setPulls(userInput);
    } else {
      alert("Hi");
      setPulls(previousInput);
    }
  }

  return (
    <View style={styles.container1}>
      <View style={styles.containerVertical}>
        <Text style={styles.text2}>Selected Properties</Text>
        <View style={styles.buttonContainer}>
          <TextInput
            placeholder={banner}
            editable={false}
            style={styles.input2}
          />
          <TextInput
            placeholder={itemType}
            editable={false}
            style={styles.input2}
          />
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
          <CustomButton1
            color="#912100"
            text="Standard"
            onPress={() => checkBanner("Standard")}
          />
          <CustomButton1
            color="#25338a"
            text="Event"
            onPress={() => checkBanner("Event")}
          />
          <CustomButton1
            color="purple"
            text="Weapon"
            onPress={() => checkBanner("Weapon")}
          />
        </View>
      </View>
      <View style={styles.defaultView}>
        <Text style={styles.text2}>Item type</Text>
        <View style={styles.buttonContainer}>
          <CustomButton1
            color="#999999"
            text="5* Character"
            onPress={() => checkItemType("5* Character")}
          />
          <CustomButton1
            color="#999999"
            text="L. Character"
            onPress={() => checkItemType("5* Limited Character")}
          />
          <CustomButton1
            color="#999999"
            text="5* Specific Character"
            onPress={() => checkItemType("5* Specific Character")}
          />
          <CustomButton1
            color="#999999"
            text="5* Weapon"
            onPress={() => checkItemType("5* Weapon")}
          />
          <CustomButton1
            color="#999999"
            text="5* Specific Weapon"
            onPress={() => checkItemType("5* Specific Weapon")}
          />
        </View>
      </View>
      <View style={styles.container3}>
        <CustomButton2 text="Calculate" color="green" onPress={()=>calculateProbability()}></CustomButton2>
        <TextInput value = {probability.toString()} style={styles.input3} editable = {false}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  buttonContainer: {
    padding: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    width: 400,
    justifyContent: "center",
  },
  container1: {
    top: "26%",
    position: "absolute",
    padding: 25
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  defaultView: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input2: {
    backgroundColor: "white",
    width: "40%",
    height: 40,
    color: "black",
    borderRadius: 8,
    textAlign: "center",
    marginRight: 6,
  },
  input3: {
    backgroundColor: "white",
    width: "20%",
    height: 50,
    color: "black",
    borderRadius: 8,
    textAlign: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginHorizontal: 5,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "white",
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
    display: "flex"
  },
  container3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: 20,
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
