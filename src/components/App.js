
import firebase from "firebase";
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,TextInput,Button,
  Text,
  View
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
constructor(){
  super();
  this.state={
    email:"",
    password:""
  }
}
signup=()=>{
  let obj={
    email:this.state.email,
    password:this.state.password,
  }

  firebase.auth().createUserWithEmailAndPassword(obj.email,obj.password)
  .then((suc)=>{
   delete obj.password;
    suc.uid = suc.uid;
    firebase.database().ref('users/' + suc.uid + '/').set(obj)
        .then((successf) => {
          this.props.navigation.navigate('App')
          alert("yes")
        })
  })
  .catch((err)=>{
    alert(err)
  })
}
  render() {
    return (
      <View style={styles.container}>
      
        <Text>Signup Page</Text>
        <TextInput type="text"
        style={{height: 40, borderColor: 'gray', borderWidth: 1,width:300}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email} title="Email"
      />
        <TextInput type="Password"
        style={{height: 40, borderColor: 'gray', borderWidth: 1,width:300}} title="password"
        onChangeText={(password) => this.setState({password})
        }
        value={this.state.password}
      />
      <Button title="Signup" style={{width:300}} onPress={this.signup}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
