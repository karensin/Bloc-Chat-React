import React, { Component } from 'react';


class User extends Component {
  constructor(props){
    super(props);
    this.state ={
      userName: null,

    }
    this.signIn= this.signIn.bind(this);
    this.signOut= this.signOut.bind(this);
   };

  componentDidMount() {
  this.props.firebase.auth().onAuthStateChanged( user => {
  this.props.setUser(user);
  });
 }

 signIn(){
   const provider = new this.props.firebase.auth.GoogleAuthProvider();
   this.props.firebase.auth().signInWithPopup(provider)
   .then((result)=> {
     const user= result.user;
     this.setState({userName:user})
       })
  }
  signOut(){
    this.props.firebase.auth().signOut().then(()=>{
      this.props.setUser(null);
    });

  }

render() {

  return(
     <div>
        <navbar>  Please Sign In  {this.props.userHere} </navbar>
        {this.props.userHere=== 'Guest'? 
          <button onClick={this.signIn}> Sign In  </button>
          :
          <button onClick={this.signOut}> Sign out </button>
          }
     </div>
    )
  }
}
export default User;
