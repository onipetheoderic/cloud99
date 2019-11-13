import React from 'react';
import Button from '../../components/button'
import {Signature} from '../../components/Signature/signature'
import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';


import {
  StyleSheet,
  Image,
  Text,
  View,
  Alert,
  ImageBackground
} from 'react-native';

class ImageSelectorScreen extends React.Component {
  static navigationOptions = {
    header: null
}

MultiImageSelector = async() => {    
    try {
        const results = await DocumentPicker.pickMultiple({
          type: [DocumentPicker.types.images],
        });
        for (const res of results) {
          console.log(
            res.uri,
            res.type, // mime type
            res.name,
            res.size
          );
        }
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User cancelled the picker, exit any dialogs or menus and move on
        } else {
          throw err;
        }
      }


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


CameraSelector = () => {
  const options = {
    title: 'Select File',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.launchCamera(options, (response) => {
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
          <Button text="Camera" routeHandler={this.CameraSelector} />
          <Button text="ImageSelector" routeHandler={this.ImageSelector} />
          <Button text="Multiple Image Uploading" routeHandler={this.MultiImageSelector} />
          <View style={{flex:2}}></View>
          <Signature />
        </ImageBackground>
      );
    }
  }

  
export default ImageSelectorScreen;  