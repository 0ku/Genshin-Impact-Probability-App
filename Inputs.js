import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {CustomButton1,CustomButton2,NavButton} from "./Buttons";
import {
  CheckBox,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function InputBox() {
  const [pulls, setPulls] = useState(null);
  const [itemType, setItemType] = useState("");
  const [banner, setBanner] = useState("");
  const [value, setValue] = useState(null);
  const [probability,setProbability] = useState(0);
  function isNumeric(num) {
    return !isNaN(num);
  }

  function reset() {
    setPulls(null);
    setBanner("")
    setProbability(0)
    setItemType("")
  }
  function calculateProbability() {
    var probability = 0;
    if (isNumeric(pulls) == false) {
      alert("You have an invalid pull input")
      return
    }
    else if  (parseInt(pulls) < 0) {
      alert("You cannot have negative pulls")
      return
    }
    if (itemType == "5* Character" && banner == "Standard") {
      var pityPulls = Math.floor(pulls/90)
      var tempPulls = pulls - pityPulls
      probability += (Math.pow((1 - (5/15)),pityPulls))
      probability *= (Math.pow((1-(1/500)),tempPulls))
      setProbability((1-probability)*100)
      return
    }
    if (itemType == "5* Weapon" && banner == "Standard") {
      var pityPulls = Math.floor(pulls/90)
      var tempPulls = pulls - pityPulls
      probability += (Math.pow((1 - (10/15)),pityPulls))
      probability *= (Math.pow((1-(1/250)),tempPulls))
      setProbability((1-probability)*100)
      return
    }
    if ((itemType == "5* Specific Character" || itemType == "5* Specific Weapon") && banner == "Standard") {
      var pityPulls = Math.floor(pulls/90)
      var tempPulls = pulls - pityPulls
      probability += (Math.pow((1 - (5/75)),pityPulls))
      probability *= (Math.pow((1-(1/2500)),tempPulls))
      setProbability((1-probability)*100)
      return
    }
    if (itemType == "5* Limited Character" && banner == "Event") {
      var pityPulls = Math.floor(pulls/90)
      var tempPulls = pulls - pityPulls
      probability += (Math.pow((1 - (1/2)),pityPulls))
      probability *= (Math.pow((1-(3/1000)),tempPulls))
      setProbability((1-probability)*100)
      if (pulls >= 180) {
        setProbability(100);
      }
      return
    }
    if (itemType == "5* Character" && banner == "Event") {
      if (pulls >= 90) {
        setProbability(100);
      }
      else {
        var pityPulls = Math.floor(pulls/90)
        var tempPulls = pulls - pityPulls
        probability += (Math.pow((1-(6/1000)),tempPulls))
        setProbability((1-probability)*100)
      }
      return
    }

    if (itemType == "5* Specific Character" && banner == "Event") {
      var pityPulls = Math.floor(pulls/90)
      var tempPulls = pulls - pityPulls
      probability += (Math.pow((1 - (1/10)),pityPulls))
      probability *= (Math.pow((1-(3/5000)),tempPulls))
      setProbability((1-probability)*100)
      return
    }
    if (itemType == "5* Weapon" && banner == "Weapon") {
      if (pulls >= 90) {
        setProbability(100)
        return
      }
      var tempPulls = pulls
      probability += (Math.pow((1-(7/1000)),tempPulls))
      setProbability((1-probability)*100)
      return
    }
    if (itemType == "5* Specific Weapon" && banner == "Weapon") {
      var pityPulls = Math.floor(pulls/90)
      var tempPulls = pulls - pityPulls
      probability += (Math.pow((1-(7/4000)),tempPulls))
      probability *= (Math.pow((1-(0.25)),pityPulls))
      setProbability((1-probability)*100)
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
    else if ((input == '5* Limited Character') && ((banner == 'Standard') || (banner == 'Weapon'))) {
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

  return (
    <SafeAreaView style={styles2.container}>
      <NavButton/>
      <Image source={require('./assets/genshin-logo.png')}
      style={{width: 325, height: 140.4, position: 'absolute',top:'10%'}}/>
      <Text style = {styles2.title}>Probability Calculator</Text>
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
            value={pulls}
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
      <View style={styles.defaultView}>
        <CustomButton2 text="Clear" color="orange" onPress={()=>reset()}></CustomButton2>
      </View>

      <View style={styles.container3}>
        <CustomButton2 text="Calculate" color="green" onPress={()=>calculateProbability()}></CustomButton2>
        <TextInput value = {probability.toFixed(3) + "%"} style={styles.input3} editable = {false}/>
      </View>
    </View>
    <StatusBar style="auto"/>
    </SafeAreaView>
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
    top: "35%",
    position: "absolute",
    padding: 20
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
    padding: 1,
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
    width: "30%",
    height: 40,
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
    padding: 10,
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

const styles2 = StyleSheet.create({
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
    top: '30%',
    color: 'white',
    fontSize: 25,
    fontWeight: "bold",
  }
});