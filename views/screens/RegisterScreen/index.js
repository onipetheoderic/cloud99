import React from 'react';
import Background from '../../components/background'
import RegistrationForm from '../../components/registrationForm'


class RegistrationScreen extends React.Component {
  static navigationOptions = {
    header: null
}

    render() {
      //we quickly do a little desctructuring, the this.props.navigation is passed to every route defined in the stack navigator
      const {navigate} = this.props.navigation;
      return (
        <Background>
            <RegistrationForm/>
        </Background>
      );
    }
  }
export default RegistrationScreen;  