import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
//import { Container, Header, Content, Picker, Form } from "native-base";
import {
  CheckBox,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
} from "react-native";

export default function InputBox() {
  const [pulls, setPulls] = useState(0);
  const [itemType, setItemType] = useState("");
  const [banner, setBanner] = useState("");
  const [value, setValue] = useState(null);
  function isNumeric(num) {
    return !isNaN(num);
  }

  function checkInput(banner) {
    if (banner == 1) {
      //1 for Standard banner
      if (isStandardBanner == true) {
        setStandardBanner(false);
      } else if (isEventBanner == false && isWeaponBanner == false) {
        setStandardBanner(true);
      }
    } else if (banner == 2) {
      //2 for Event banner
      if (isEventBanner == true) {
        setEventBanner(false);
      } else if (isStandardBanner == false && isWeaponBanner == false) {
        setEventBanner(true);
      }
    } else if (banner == 3) {
      //2 for Weapon banner
      if (isWeaponBanner == true) {
        setWeaponBanner(false);
      } else if (isStandardBanner == false && isEventBanner == false) {
        setWeaponBanner(true);
      }
    }
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
    if (isNumeric(userInput)) {
      setPulls(userInput);
    } else {
      alert("Hi");
    }
  }

  return (
    <View style={styles.conatiner1}>
      <SafeAreaView>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}> Number of pulls</Text>
          <TextInput
            keyboardType={"numeric"}
            placeholder="0"
            style={styles.input}
            onChangeText={(value) => verifyPulls(value)}
          />
        </SafeAreaView>
      </SafeAreaView>
      <View style={styles.defaultView}>
        <Text style={styles.text2}>Banner Type</Text>
        <View style={styles.pickerContainer}>
        </View>
      </View>
      <View style={styles.defaultView}>
        <Text style={styles.text2}>Item type</Text>
      </View>

      <View style={styles.pickerContainer}>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  pickerContainer: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  conatiner1: {
    top: "35%",
    position: "absolute",
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    paddingTop: 7,
    fontSize: 17,
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  defaultView: {
    textAlign: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    textAlign: "left",
    paddingLeft: 10,
    margin: 12,
    borderWidth: 1,
    color: "white",
    borderRadius: 8,
    width: 80,
  },
  container: {
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#2E2E2E",
    alignItems: "center",
    justifyContent: "center",
  },
  checkBoxContainer: {
    margin: 5,
    flexDirection: "row",
    backgroundColor: "#2E2E2E",
    alignItems: "center",
  },
  checkBoxContainer2: {
    marginTop: 2,
    flexDirection: "row",
    backgroundColor: "#2E2E2E",
    alignItems: "center",
  },

  checkBox: {
    alignSelf: "center",
    height: 30,
    width: 30,
    padding: 5,
  },

  title: {
    color: "white",
    fontSize: 30,
  },
});
