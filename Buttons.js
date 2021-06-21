import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  CheckBox,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export const CustomButton1 = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: props.color }]}
        onPress={props.onPress}
      >
        <Text style={styles.buttonLabel}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const CustomButton2 = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: props.color },{width: 120,height: 50}]}
        onPress={props.onPress}
      >
        <Text style={[styles.buttonLabel,{fontWeight: "bold"}]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    marginHorizontal: 5,
    marginBottom: 6,
    width: 100,
    height: 40,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  },
});
