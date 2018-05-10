import React, { Component } from 'react';
import firebase from "firebase";
import DatePicker from 'react-native-datepicker'
import { Container, Header, Content, Form, Item, Input ,Button,Text,Label,Textarea} from 'native-base';
export default class Matchreg extends Component {
  constructor(){
    super();
    this.state={
      entery:"",
      time:"",
      date:"",
      area:"",
      teams:"",
      details:"",
      username:"",
      userphone:""
    }
  }
  componentWillMount(){
    var user =firebase.auth().currentUser.uid;
    firebase.database().ref('users/' + user + '/').once('value')
          .then((data) => {
              let userdata = data.val();
              var name=userdata.name;
              var phone=userdata.phone;
              this.setState({
                username:name,
                userphone:phone
              })
          })
    
    
  }
  Reg=()=>{
   if(this.state.teams!=="" && this.state.time!=="" && this.state.entery!=="" && this.state.date!==""&& this.state.details!==""&& this.state.area!==""){
    let obj={
      phone:this.state.userphone,
      user:this.state.username,
      entery:this.state.entery,
      time:this.state.time,
      date:this.state.date,
      teams:this.state.teams,
      details:this.state.details,
      area:this.state.area,
    }
  
    firebase.database().ref("/").child("regMatch").push(obj)
       .then((successf) => {
        this.props.navigation.navigate('allmatch')
           
            this.setState({
              entery:"",
              time:"",
              date:"",
              area:"",
              teams:"",
              details:""
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
  // logout=()=>{
  //   firebase.auth().signOut().then(function() {
  //       this.navigation.navigate("signup");
  //        alert(Sign-out successful);
  //     }).catch(function(error) {
  //   alert(error);
  //     });
  // }
  render() {
    return (
      <Container>
       
        <Content>
          <Form>
         
          <Item floatingLabel>
              <Label>Match Entry Rupees</Label>
              <Input keyboardType="numberic" onChangeText={(entery)=>{this.setState({entery})}} />
            </Item>
            <Item floatingLabel>
              <Label> Timing 01am to 05am</Label>
              <Input  onChangeText={(time)=>{this.setState({time})}} />
            </Item>
            
            <Item floatingLabel>
              <Label>Address</Label>
              <Input onChangeText={(area)=>{this.setState({area})}} />
            </Item>
            <Item floatingLabel>
              <Label>Total Teams</Label>
              <Input keyboardType="numberic" onChangeText={(teams)=>{this.setState({teams})}} />
            </Item>
            <Item floatingLabel>
              <Label>Rules Detils</Label>
              <Input multiline={true}
                numberOfLines={2} onChangeText={(details)=>{this.setState({details})}} />
            </Item>
            <Label style={{paddingLeft:15}}>Date</Label>
            <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        // minDate="2016-05-01"
        // maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
        {/* <Item floatingLabel>
              <Label>Detils</Label>
              <Input
                multiline={true}
                numberOfLines={10}
              /> */}
            
            <Button bordered full onPress={this.Reg} style={{marginTop:10}} >
            <Text>Register Now!</Text>
          </Button>
            {/* <Button bordered full onPress={this.logout} style={{marginTop:10}} >
            <Text>Logout</Text>
          </Button> */}
          </Form>
        </Content>
        
      </Container>
    );
  }
}