import React from 'react';
import Button from '../button'
import colors from '../colors'
import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  TextInput,
  Text,
  Alert,
  ImageBackground
} from 'react-native';

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      value:""
    }
  }
    render() {
      return (    
        <>        
          <View style={styles.SectionStyle}>
            <TextInput
                style={{ flex: 1 }}
                placeholder="Enter Email"
                underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
                style={{ flex: 1 }}
                placeholder="Enter Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
            />
          </View>
          <Button text="Login"/>
          <View style={{flex:1, justifyContent:'flex-end', marginBottom:6}}>
          <Text style={styles.forgetPassword}>FORGOT PASSWORD</Text>
          <Text style={styles.signUp}>Dont Have an Account Yet? SIGN UP</Text>
          </View>
        </>
          
        );
    }
  }

  const styles = StyleSheet.create({
    forgetPassword: {
      fontSize:14,
      marginVertical:30,
      color:colors.green,      
    },
    signUp: {
      fontSize: 11
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50,
        width: '80%',
        borderRadius: 15,
        marginHorizontal: 20,
        marginVertical:8,
        elevation:2
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
})
export default LoginForm;  