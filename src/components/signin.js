import React, { Component } from 'react';
import firebase from "firebase";

import { Container, Header, Content, Form, Item, Input ,Button,Text,Label, Body,Title,Left} from 'native-base';
export default class SignUp extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:""
    }
  }
  signin=()=>{
    if(this.state.email!==""&&this.state.password!==""){
    let obj={
      email:this.state.email,
      password:this.state.password,
     
    }
  
    firebase.auth().signInWithEmailAndPassword(obj.email,obj.password)
    .then((suc)=>{
      alert("LogIn success")
            this.props.navigation.navigate('Main')
    })
    .catch((err)=>{
      alert(err)
    })
  }
  else{
  alert("please fill both field!!!")
    
  }
  }
  render() {
    return (
      <Container>
        {/* <Text style={{textAlign:"center" ,color:"white",fontSize:18,backgroundColor:"blue", fontStyle:"bold",height:30}}>SignIn Page */}
        {/* </Text> */}
        <Header>
          {/* <Left/> */}
          <Body>
            <Title  style={{marginLeft:"40%"}}>SignIn
            </Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(email)=>{this.setState({email})}} />
            </Item>
            <Item floatingLabel  >
              <Label>password</Label>
              <Input secureTextEntry={true} onChangeText={(password)=>{this.setState({password})}} />
            </Item>
            <Button bordered full onPress={this.signin} style={{marginTop:10}} >
            <Text>SignIn</Text>
          </Button>
        
          </Form>
        </Content>
        
      </Container>
    );
  }
}