import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
  } from 'react-native';

class TextBox extends React.Component {
 
      render() {
          return (
<View style={styles.SectionStyle}>

    <Image
        source={require('./assets/images/email.png')} //Change your icon image here
        style={styles.ImageStyle}
    />

    <TextInput
        style={{ flex: 1 }}
        placeholder={this.props.placeholder}
        underlineColorAndroid="transparent"
    />
</View>
        );
      }
    }

    const styles = StyleSheet.create({
        SectionStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            height: 50,
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

  export default TextBox;  