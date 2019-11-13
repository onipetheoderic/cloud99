import React from 'react';
import Button from '../../components/button'
import {Signature} from '../../components/Signature'
import ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Alert,
  ImageBackground
} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
}


goToLogin = () => {
this.props.navigation.navigate('Login')
}
gotoRegister=()=> {
this.props.navigation.navigate('Register')
}
gotoCamera=()=> {
  this.props.navigation.navigate('CameraCapture')
}
gotoImageSelector=()=>{
  this.props.navigation.navigate('ImageSelector')
}

gotoUploader = () => {
  this.props.navigation.navigate('UploadFile')
}

ImageSelector = () => {
  const options = {
    title: 'Select File',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchImageLibrary(options, (response) => {
    console.log('Response = ', response);
   
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };
   
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
   
      this.setState({
        avatarSource: source,
      });
    }
  });
}

    render() {
      //we quickly do a little desctructuring, the this.props.navigation is passed to every route defined in the stack navigator
      const {navigate} = this.props.navigation;
      return (
        <ImageBackground resizeMode="cover"  source={require('../../images/speedy6.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={{flex:2}}></View>          
          <Button text="Login" routeHandler={this.goToLogin}/>
          <Button text="Register" routeHandler={this.gotoRegister}/>
          <Button text="Image Selection Page" routeHandler={this.gotoImageSelector} />
          <Button text="Upload Files" routeHandler={this.gotoUploader}/>
          <View style={{flex:2}}></View>
          <Signature />
        </ImageBackground>
      );
    }
  }

  
export default HomeScreen;  