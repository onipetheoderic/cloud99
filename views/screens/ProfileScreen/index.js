import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
}
    render() {
      //we destructure the this.props.navigation
      const { navigation } = this.props;
      const name = navigation.getParam('name', "no Name")
      return (
        <>
        <Text>
         My name is {name}
        </Text>
        <Button
          title={`welcome to ${name} Profile pagee`}
          onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
        />
        </>
      );
    }
  }

export default ProfileScreen;