import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js';
import logo from './logo.svg';

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
    constructor(props) {
      super(props);
      this.state = {
        activeRoom: "",
        user: null
      };
      this.setActiveRoom = this.setActiveRoom.bind(this);
      this.setUser = this.setUser.bind(this);
    }

    setActiveRoom(room) {
      this.setState({ activeRoom: room
      });
    }

    setUser(user) {
      this.setState({ user: user
       });
    }

      render() {
        let listMessages = this.state.activeRoom;
        let activeUser  = this.state.user === null ? "Guest" : this.state.user.displayName;

        return (
          <div className="App">

         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h1 className="App-title">Welcome to Chatty</h1>
         </header>
         <div class='topnav'>
            <User
              firebase={firebase}
              setUser={this.setUser}
              userHere={activeUser}
              />
              </div>
            <h2>{this.state.activeRoom.name || "Choose a room or Create one"}</h2>
            <section class= "roomlist">
            <RoomList
              firebase={firebase}
             setActiveRoom={this.setActiveRoom}
             />
             </section>
             <section class = "messages">
            { listMessages ?
              <MessageList firebase={firebase}
              activeRoom={this.state.activeRoom.key}
              user ={activeUser} />
            : null
            }
            </section>
          </div>
        );
      }
    }
  export default App;
