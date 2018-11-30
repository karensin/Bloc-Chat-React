import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';

  var config = {
    apiKey: "AIzaSyDxQe-GbXvFlfi8KqMe3jCMxXbi2y14vso",
    authDomain: "chatty-1b82d.firebaseapp.com",
    databaseURL: "https://chatty-1b82d.firebaseio.com",
    projectId: "chatty-1b82d",
    storageBucket: "chatty-1b82d.appspot.com",
    messagingSenderId: "762771235835"
  };
  firebase.initializeApp(config);
 
class App extends Component {

  render() {
    return (
      <div className="App">

        <h1> Bloc chat</h1>
        <RoomList firebase={firebase} />
      </div>


    );
  }
}

export default App;
