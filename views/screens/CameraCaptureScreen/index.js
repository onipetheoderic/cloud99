import React, { PureComponent } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import { RNCamera } from 'react-native-camera';

class CameraCaptureScreen extends PureComponent {
constructor(props){
  super(props)
  this.state={
    permissionsGranted:false
  }
}


componentDidMount(){
  async function requestStoragePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cloud99 need access to your storage',
          message:
            'Cool Photo App needs access to your storage ' +
            'so you can save the photos taken',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('storage permission accepted');
      } else {
        console.log('storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  async function requestReadStoragePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Cloud99 need access to your storage',
          message:
            'Cool Photo App needs access to your storage ' +
            'so you can save the photos taken',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('storage permission accepted');
      } else {
        console.log('storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  requestStoragePermission()  
  requestReadStoragePermission();
}



  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }



  takePicture = async() => {
    if (this.camera) {
      const options = { quality: 1.0, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      CameraRoll.saveToCameraRoll(data.uri, "photo");
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default CameraCaptureScreen