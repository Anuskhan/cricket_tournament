import React, { Component } from 'react';
import firebase from "firebase";
console.disableYellowBox = true;
import { Container, Header, Content, Form, Item, Input ,Button,Text,Label,Left,Body,Title} from 'native-base';
export default class SignUp extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      phone:"",
      name:"",
      password:""
    }
  }
  signup=()=>{
    if(this.state.name!=="" && this.state.email!=="" && this.state.password!=="" && this.state.phone!==""){
    let obj={
      email:this.state.email,
      password:this.state.password,
      name:this.state.name,
      phone:this.state.phone
    }
  
    firebase.auth().createUserWithEmailAndPassword(obj.email,obj.password)
    .then((suc)=>{
     obj.password;
      suc.uid = suc.uid;
      firebase.database().ref('users/' + suc.uid + '/').set(obj)
          .then((successf) => {
           
            this.props.navigation.navigate('signin')
            this.setState({
              email:"",
              phone:"",
              name:"",
              password:""
            })
alert("SigUp successfully")
          })
    })
    .catch((err)=>{
      alert(err)
    })
  }
  else{
    alert("Please fill all field!!")
  }
  }
  render() {
    return (
      <Container>
       <Header>
          {/* <Left/> */}
          <Body >
            <Title style={{marginLeft:"40%"}}>SignUp
            </Title>
          </Body>
        </Header>
        <Content>
          <Form>
         
          <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(name)=>{this.setState({name})}} />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(email)=>{this.setState({email})}} />
            </Item>
            <Item floatingLabel  >
              <Label>password</Label>
              <Input secureTextEntry={true} onChangeText={(password)=>{this.setState({password})}} />
            </Item>
            <Item floatingLabel  >
              <Label>phone</Label>
              <Input keyboardType="numberic" onChangeText={(phone)=>{this.setState({phone})}} />
            </Item>
          
          

            
            <Button bordered full onPress={this.signup} style={{marginTop:10}} >
            <Text>Sign Up</Text>
          </Button>
          <Button transparent full onPress={()=>{this.props.navigation.navigate("signin")}} >
            <Text>i have already sign up</Text>
          </Button>
          </Form>
        </Content>
        
      </Container>
    );
  }
}