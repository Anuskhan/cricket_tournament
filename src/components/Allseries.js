import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Button ,H3} from 'native-base';
import * as firebase from 'firebase';
// import { Container } from 'native-base';
// import styles from '../style'
// import { SearchBar } from 'react-native-elements'
// import DatePicker from 'react-native-datepicker'

// import DatePicker from '../components/DatePicker'



export default class Allseries extends React.Component {
  constructor() {
    super();
    // this.showData = this.showData.bind(this);
    this.state = {
      data: [],
      
      
    }
    var obj;
  }
  
  componentDidMount() {
    
    
    var array = [];
    // db reference
    firebase.database().ref("/").child("series").on('child_added', snap => {
      obj = snap.val();
      obj.key = snap.key
      array = this.state.data;
      array.push(obj);
      this.setState({
        
        data: array,
        
        
      })
    })
    
    
  }
  interest =(id,team)=>{
    
    var a = this.state.count + 1;


    this.setState({
      count: a
    })
    if (this.state.count < 1) {
      var user = firebase.auth().currentUser.uid;
      firebase.database().ref('users/' + user + '/').once('value')
        .then((data) => {
          let userdata = data.val();
          var name = userdata.name;
          var phone = userdata.phone;
          let regobj = {
            name: name,
            phone: phone
          }
          firebase.database().ref("/").child('series/' + id + "/").child("id/").push(regobj)
          alert(name + " Register successfully" );
        })
    }
    else {
      alert("Registeration full");

    }

}
    render() {
      return (
            <ScrollView >
         
                {
                  this.state.data.map((value,index)=>{
                      return(
                 <Content key={index} id={obj.key} >
          <Card>
            <CardItem header>
              <Text>Name : {value.user} </Text>
             
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontSize:18}}>Per Match :<Text> {value.entery}PKR</Text> </Text>
                <Text style={{fontSize:18}}>Match Timing :<Text> { value.time}</Text></Text>
                <Text style={{fontSize:18}}>Address :<Text> {value.area}</Text></Text>
                <Text style={{fontSize:18}}>Date : <Text>{value.date}</Text></Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Contact : {value.phone}</Text>
              <Button onPress={(a,b)=>{this.interest(obj.key,value.teams)}} style={{marginLeft:20}} transparent   success>
            <Text>Interested</Text>
          </Button>
            </CardItem>
         </Card>
        </Content>     
                      
                      );
                })
                }

              
            </ScrollView>
        )
    }
}
