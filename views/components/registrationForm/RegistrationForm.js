import React from 'react';
import Button from '../button'
import colors from '../colors'
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

class RegistrationForm extends React.Component {
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
                placeholder="Enter Fullname"
                underlineColorAndroid="transparent"
            />
          </View>
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
                underlineColorAndroid="transparent"
                secureTextEntry={true}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
                style={{ flex: 1 }}
                placeholder="Phone Number"
                keyboardType="numeric"
                underlineColorAndroid="transparent"
            />
          </View>
          <Button text="Register"/>
          
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
      fontSize: 11,
      marginBottom:10
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
export default RegistrationForm;  