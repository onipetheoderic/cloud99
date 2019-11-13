import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './views/screens/HomeScreen';
import ProfileScreen from './views/screens/ProfileScreen';
import LoginScreen from './views/screens/LoginScreen';
import RegisterScreen from './views/screens/RegisterScreen'
import CameraCaptureScreen from './views/screens/CameraCaptureScreen'
import ImageSelectorScreen from './views/screens/ImageSelectorScreen';
import UploadFileScreen from './views/screens/UploadFileScreen';


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
  Login: {screen: LoginScreen},
  Register:{screen: RegisterScreen},
  UploadFile:{screen:UploadFileScreen},
  CameraCapture: {screen:CameraCaptureScreen},
  ImageSelector: {screen:ImageSelectorScreen},
},
{
  initialRouteName: 'Home',
});

const App = createAppContainer(MainNavigator);

export default App;