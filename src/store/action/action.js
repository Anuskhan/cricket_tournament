
import ActionTypes from '../constant/constant';
// import history from '../../History';
// import createBrowserHistory from 'history/createBrowserHistory'
import firebase from 'firebase';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory()

// const hsitory = createBrowserHistory()



// var config = {
//     apiKey: "AIzaSyBj71WyfocMv6c2tw019W9rg_zl1frgLdM",
//     authDomain: "fir-learning-6a8d7.firebaseapp.com",
//     databaseURL: "https://fir-learning-6a8d7.firebaseio.com",
//     projectId: "fir-learning-6a8d7",
//     storageBucket: "fir-learning-6a8d7.appspot.com",
//     messagingSenderId: "333978526201"
// }; 
// firebase.initializeApp(config);



export function fatchdatafun(name) {
    console.log(name,"bhai")    
return function(dispatch){

    // fetch(`https://www.metaweather.com/api/location/search/?query=${name}`, {mode: 'no-cors'})
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(snap) {
     snap.json().then((data)=>{

         console.log(data,"snap")
         return dispatch => {
             dispatch({ type: ActionTypes.API, payload: data })
         }
         
     })
    });
    }
}

