import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';
import User from './components/User.js';

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
  constructor(props){
    super(props);
    this.state={
      activeRoom:'',
      user:null ,

    };
    this.setActiveRoom=this.setActiveRoom.bind(this);
    this.setUser=this.setUser.bind(this);

}
    setActiveRoom(room){
      this.setState({
        activeRoom: room
      });
    }
    setUser(user){
      this.setState({
        user: user
         });
    }
  render() {
    const listMessages = this.state.activeRoom;
    const activeUser = this.state.user === null ? "Guest" : this.state.user.displayName;

    return (

     <div className="App">

      <h1>Chatty</h1>
      <div class='topnav'>
         <User
          firebase={firebase}
          setUser={this.setUser}
          currentUser= {activeUser}
          />
      </div>
      <aside>
          <RoomList
            firebase={firebase}
            setActiveRoom={this.setActiveRoom}/>
      </aside>
      <body>
        {listMessages ?
        <MessageList firebase={firebase}
        activeRoom={this.state.activeRoom.key}/>
        :null
      }
         </body>
         </div>
    );
  }
}

export default App;
