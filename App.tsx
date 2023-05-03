import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Routes from './screens/Routes.js'

class basicApp extends Component {
   render() {
      return (
         <Routes/>
      )
   }
}
export default basicApp
AppRegistry.registerComponent('basicApp', () => basicApp)


