import React from 'react';

import {
  StyleSheet,
  Image,
  View,
  Alert,
  ImageBackground
} from 'react-native';

class Background extends React.Component {
  static navigationOptions = {
    header: null
}
    render() {
      return (
        <ImageBackground resizeMode="cover"  source={require('../../images/speedy6.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={{flex:2}}></View>      
          <View style={{flex:3, alignItems:'center', backgroundColor:'white',  width:'100%'}}>
         
            <View style={{flex:3, width:'100%'}}>
            {this.props.children}
            </View>
          </View>

         
        </ImageBackground>
      );
    }
  }
export default Background;  