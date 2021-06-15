import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import {
  CheckBox,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Picker,
  TouchableWithoutFeedback,
} from "react-native";

export default function InputBox() {
  const [pulls, setPulls] = useState(0);
  const [isEventBanner, setEventBanner] = useState(false);
  const [isWeaponBanner, setWeaponBanner] = useState(false);
  const [isStandardBanner, setStandardBanner] = useState(false);
  //for dropdown menu
  const [open,setOpen] = useState(false);
  const [items,setItems] = useState([
    {label: '5* Character', value: '5*character'},
    {label: '5* Specific Character', value: '5*specificChar'},
  ]);
  const [value,setValue] = useState(null);
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

  function checkItemType(itemType) {
    if (isWeaponBanner == false && isEventBanner == false && isStandardBanner == false) {
      alert("You cannot select an item type prior to selecting a banner type");
    }
    else if (itemType == "5*character" && isWeaponBanner == false) {
      set5starChar(true);
    }
  }
  return (
    <View style = {styles.conatiner1}>
      <SafeAreaView>
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}> Number of pulls</Text>
          <TextInput
            keyboardType={"numeric"}
            placeholder="0"
            style={styles.input}
          />
        </SafeAreaView>
      </SafeAreaView>
      <View style={styles.text1}>
        <Text style={styles.text2}>Banner Type</Text>
      </View>
      <SafeAreaView style={styles.container2}>
        <SafeAreaView style={styles.checkBoxContainer}>
          <Text style={styles.text}> Standard</Text>
          <CheckBox
            style={styles.checkBox}
            value={isStandardBanner}
            onValueChange={() => checkInput(1)}
          ></CheckBox>
        </SafeAreaView>
        <SafeAreaView style={styles.checkBoxContainer}>
          <Text style={styles.text}> Event</Text>
          <CheckBox
            style={styles.checkBox}
            value={isEventBanner}
            onValueChange={() => checkInput(2)}
          ></CheckBox>
        </SafeAreaView>
        <SafeAreaView style={styles.checkBoxContainer}>
          <Text style={styles.text}> Weapon</Text>
          <CheckBox
            style={styles.checkBox}
            value={isWeaponBanner}
            onValueChange={() => checkInput(3)}
          ></CheckBox>
        </SafeAreaView>
      </SafeAreaView>
      <View style={styles.text1}>
        <Text style = {styles.text2}>
        Item type 
        </Text>
      </View>
      <DropDownPicker
      dropDownDirection = {"BOTTOM"}
      dropDownContainerStyle = {styles.dropdownOpen}
      items = {items}
      open ={open}
      setOpen={setOpen}
      setValue={setValue}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  dropdownOpen: {
    backgroundColor: "white",
    alignItems: 'center',
    borderWidth: 0,
    fontSize: 15,
  },
  conatiner1: {
    top: '30%',
    position: 'absolute',
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
  text1: {
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
