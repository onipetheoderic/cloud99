import React from 'react';
import Button from '../../components/button'
import {Signature} from '../../components/Signature/signature'
import FilePickerManager from 'react-native-file-picker';
import DocumentPicker from 'react-native-document-picker';

import {
  StyleSheet,
  Image,
  Text,
  View,
  Alert,
  ImageBackground
} from 'react-native';

class UploadFileScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            file:""
        }
    }
  static navigationOptions = {
    header: null
}

SingleUploader = () => {
    FilePickerManager.showFilePicker(null, (response) => {
        console.log('Response = ', response);
       
        if (response.didCancel) {
          console.log('User cancelled file picker');
        }
        else if (response.error) {
          console.log('FilePickerManager Error: ', response.error);
        }
        else {
          this.setState({
            file: response
          });
        }
      });
}


MultipleUploader = async () => {
    
    try {
        const results = await DocumentPicker.pickMultiple({
          type: [DocumentPicker.types.allFiles],
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

render() {
      //we quickly do a little desctructuring, the this.props.navigation is passed to every route defined in the stack navigator
      const {navigate} = this.props.navigation;
      return (
        <ImageBackground resizeMode="cover"  source={require('../../images/speedy6.jpg')} style={{width: '100%', height: '100%'}}>
          <View style={{flex:2}}></View>          
          <Button text="Single File Upload" routeHandler={this.SingleUploader} />
          <Button text="Multiple File Upload" routeHandler={this.MultipleUploader} />
          <View style={{flex:2}}></View>
          <Signature />
        </ImageBackground>
      );
    }
  }

  
export default UploadFileScreen;  