import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class WriteStoryScreen extends React.Component{
    render(){
  return (
    <View>
     <Text style={styles.titleText}>Story Hub</Text>
     <TextInput style={styles.storyTitle} placeholder='Story Title'/>
     <TextInput style={styles.authorText} placeholder='Author'/>
     <TextInput style={styles.writeStoryText} placeholder='Write Story Here'/>
    </View>
  );
}}

const styles = StyleSheet.create({
  titleText:{
  marginTop:50,
  marginLeft:650,
  fontWeight:'bold'
  },
  storyTitle:{
      marginLeft: 620,
      marginTop:150,
      borderWidth:1,
      borderRadius:15,
      width:100,
      height:50,
      paddingLeft:15
  },
  authorText:{
    marginLeft: 620,
    marginTop:20,
    borderWidth:1,
    borderRadius:15,
    width:100,
    height:50,
    paddingLeft:25
  },
  writeStoryText:{
    marginLeft: 520,
    marginTop:20,
    borderWidth:1,
    borderRadius:15,
    width:300,
    height:100,
    paddingLeft:90
  }
  
});
