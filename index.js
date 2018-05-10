import { AppRegistry } from 'react-native';
import firebase from "firebase";
 import Navbar from './src/components/navbar';
// import SignUp from './src/components/signup';
var config = {
    apiKey: "AIzaSyBU9H-abTd31otb8bJut_5WWUOt8cQazaU",
    authDomain: "reactnative-32c24.firebaseapp.com",
    databaseURL: "https://reactnative-32c24.firebaseio.com",
    projectId: "reactnative-32c24",
    storageBucket: "reactnative-32c24.appspot.com",
    messagingSenderId: "163065329715"
  };
  firebase.initializeApp(config);

  
AppRegistry.registerComponent('native_reduxx', () => Navbar);
