import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../colors'

export default class Myproject extends Component {
 
  render() {
     return (
     
       <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity = { .5 }
          onPress={this.props.routeHandler} 
       > 
        <Text style={styles.TextStyle}> {this.props.text} </Text>    
        </TouchableOpacity> 
      
    );
  }
} 
const styles = StyleSheet.create({ 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
 
  SubmitButtonStyle: {
    marginTop:10,
    width: '80%',
    paddingVertical:13,
    paddingHorizontal:20,
    marginLeft:30,
    marginRight:30,
    elevation:1,
    backgroundColor: colors.green,
    borderRadius:20,

  },
 
  TextStyle:{
      color: colors.sexyWhite,
      fontSize: 17,
      fontWeight: 'bold',
      textAlign:'center',
  }
 
});
 