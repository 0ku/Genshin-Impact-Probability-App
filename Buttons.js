import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
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
        style={[styles.buttonStyle, { backgroundColor: props.color },{width: 100,height: 40}]}
        onPress={props.onPress}
      >
        <Text style={[styles.buttonLabel,{fontWeight: "bold"}]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const NavButton = (props) => {
  const navigation = useNavigation();
  return (
    <View style = {styles.navContainer}>
      <Button
      onPress = {()=>navigation.openDrawer()}
      buttonStyle = {{
        backgroundColor: '#525252',
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
      }}
      type ="solid"
      icon = {<Icon
        name= "navicon"
        size = {35}
        color="white"/>}
      >
      </Button>
    </View>
  );
};


const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    top: '5%',
    left: '7%'
},
  buttonStyle: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    marginHorizontal: 5,
    marginBottom: 6,
    width: 100,
    height: 33,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  },

});
