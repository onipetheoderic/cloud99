import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

class GradientBackground extends React.Component {
 
      render() {
        const alignFunction = () => {
            return this.props.horizontal ? [1,0] : [0,1]
        }

        return (        
        <LinearGradient  start={{x: 0, y: 0}} end={{x: alignFunction()[0], y: alignFunction()[1]}} colors= {this.props.colors} style= {{ flex:1 }}>
              {this.props.children}
        </LinearGradient>
        );
      }
    }
  export default GradientBackground;  