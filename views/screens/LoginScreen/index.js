import React from 'react';
import Background from '../../components/background'
import LoginForm from '../../components/loginForm'


class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
}

    render() {
      //we quickly do a little desctructuring, the this.props.navigation is passed to every route defined in the stack navigator
      const {navigate} = this.props.navigation;
      return (
        <Background>
            <LoginForm/>
        </Background>
      );
    }
  }
export default LoginScreen;  