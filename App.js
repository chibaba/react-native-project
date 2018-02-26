import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
   state = {
     placeName: ""
   };
   placeNameChangedHandler = val => {
       this.setState({
         placeName: val
       });
   };
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
       <TextInput 
       placeholder="An Awesome place"
       value={this.state.placeName} 
       onChangeText={this.placeNameChangedHandler} 
       style={styles.placeInput}
       /> 
       <Button title="Add" style={styles.placeButton} />
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignItems: "center"
  },
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection:"row",
    justifyContent: "space-between"
  },
  placeInput: {
    width: "70%"
  },
    placeButton: {
      width: "30%"
    }
  
});
