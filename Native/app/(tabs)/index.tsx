import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomePage(){
  return(
    <View style={{backgroundColor: 'white'}}>
      <Text style={{fontSize: 20, color: 'black', flex:1, justifyContent:'space-evenly',}}>Hello, Ehan </Text>
      <Text style={{fontSize: 20, color: 'black'}}>Image</Text>
    </View>
  );
}