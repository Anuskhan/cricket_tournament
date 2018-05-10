import React, { Component } from 'react';
import firebase from "firebase";
import DatePicker from 'react-native-datepicker'
import { Container, Header, Content, Form, Item, Input ,Button,Text,Label,Textarea} from 'native-base';
export default class Series extends Component {
  constructor(){
    super();
    this.state={
      entery:"",
      time:"",
      date:"",
      area:"",    
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
   if(this.state.entery!=="" && this.state.time!==""  && this.state.date!==""&&  this.state.area!==""){
    let obj={
      phone:this.state.userphone,
      user:this.state.username,
      entery:this.state.entery,
      time:this.state.time,
      date:this.state.date,
      area:this.state.area,
    }
  
    firebase.database().ref("/").child("series").push(obj)
       .then((successf) => {
        this.props.navigation.navigate('allseries')
           
            this.setState({
              entery:"",
              time:"",
              date:"",
              area:"",
             
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
//   logout=()=>{
//     firebase.auth().signOut().then(function() {
//         this.navigation.navigate("signup");
//          alert(Sign-out successful);
//       }).catch(function(error) {
//     alert(error);
//       });
//   }
  render() {
    return (
      <Container>
       
        <Content>
          <Form>
         
          <Item floatingLabel>
              <Label>Per Match Rupees</Label>
              <Input keyboardType="numberic" onChangeText={(entery)=>{this.setState({entery})}} />
            </Item>
            <Item floatingLabel>
              <Label>Match Timing </Label>
              <Input  onChangeText={(time)=>{this.setState({time})}} />
            </Item>
            
            <Item floatingLabel>
              <Label>Match Location</Label>
              <Input onChangeText={(area)=>{this.setState({area})}} />
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