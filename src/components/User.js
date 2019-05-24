import React, { Component } from 'react';
import * as firebase from 'firebase';
 import './User.css';

class User extends Component {
  constructor (props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged((user) => {
      this.props.setUser(user);
    });
  }

  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.props.setUser(user);
    });
  }

  signOut() {
    this.props.firebase.auth().signOut().then(() => {
      this.props.setUser(null);
    })
  }

  render() {
    return (
      <div className="login">

        <p>{this.props.currentUser === 'Guest' ? "Please sign in" : "You're signed in"}</p>
        {this.props.userHere=== 'Guest'?
                  <button className="signIn" onClick={this.signIn}> Sign In  </button>
                  :
                  <button className="signOut" onClick={this.signOut}> Sign out </button>
                  }

      </div>
    )
  }
}
export default User;
