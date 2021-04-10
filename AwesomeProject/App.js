import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {WebView} from "react-native-webview";
import List from "./List";

class App extends Component {
  state = {
    count: 0,
    active:"List"
  };

  onPressIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  onPressDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  openCommonkeyWebView=()=>{
    this.setState({
      active:"WebView"
    })
  }
  render() {
    return (
      <>
      {this.state.active==="List"?
         <View style={styles.container}>
         <Text style={styles.title}>Prasanna's First React Native App with Expo</Text>
         <View style={styles.buttonAlignment}>
         <TouchableOpacity style={styles.button} onPress={this.onPressIncrement}>
           <Text style={styles.text}>Increment</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={this.onPressDecrement}>
           <Text style={styles.text}>Decrement</Text>
         </TouchableOpacity>
         </View>
         <View>
           <Text>You clicked {this.state.count} times</Text>
         </View>
         <List />
         <TouchableOpacity style={styles.button} onPress={this.openCommonkeyWebView}>
           <Text style={styles.text}>Open CommonKey WebView</Text>
         </TouchableOpacity>
       </View>
      :<View style={{ flex: 1,marginTop:50 }}>
        
      <WebView
        source={{
          uri: "https://dashboard.commonkey.com/",
        }}
      />
    </View>}    
        
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop:50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#b5dfff",
    padding: 10,
    margin:10,
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
    borderRadius:50,
  },
  buttonAlignment:{
    flexDirection:"row",
    borderColor:"#014f8a"
  },
  text: {
    color: "#014f8a",
  },
  title:{
    fontSize:22,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:50,
  }
});

export default App;
