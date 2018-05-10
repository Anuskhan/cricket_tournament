import App from "./App";
// import Home from "./home";
import Allmatch from "./allmatch";
import Matchreg from "./matchreg";
import Series from "./seriesmatch";
import Allseries from "./Allseries";
import Signup from "./signup";
import Signin from "./signin";
// import Home from "./home";
import { StackNavigator ,TabNavigator} from 'react-navigation';
const TabsNavigator = TabNavigator({
  Register: { screen: Matchreg },
  Tournaments: { screen: Allmatch },
  SeriesReg: { screen: Series },
  Allseries: { screen: Allseries },
 
 })
 const navigationOptions = {
  title: 'Sigup',
  headerMode: 'none',

}
const Nav = StackNavigator({
  signup: { screen: Signup },
  signin: { screen: Signin },
  Main: { screen: TabsNavigator },
}, navigationOptions)

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class Navbar extends Component<Props> {
  render() {
    return (


      <Nav />
    );
  }
}

