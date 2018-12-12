import React, { Component } from 'react';
import* as firebase from 'firebase';

class messageList extends Component{
  constructor(props) {
    super(props);
    this.state = {
        userName:' ',
        sentAt:' ',
        roomId:' ',
        content:' ',
        messages: [],
  };
  this.messagesRef = this.props.firebase.database().ref('messages');
  this.createMessage = this.createMessage.bind(this);
  this.messageContent = this.messageContent.bind(this);
  this.convertMillisToTime=this.convertMillisToTime.bind(this);
 };

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
       const message = snapshot.val();
       message.key = snapshot.key;
       this.setState({ messages: this.state.messages.concat( message ) })
     });


 }
  createMessage(e){
    e.preventDefault();
    this.messagesRef.push({
      userName:this.state.userName,
      content:this.state.content,
      sentAt:this.state.sentAt,
      roomId:this.state.roomId,
    });

    this.setState({
        userName:'',
        content:'',
        sentAt:'',
        roomId:'',
    });
    e.target.reset()
  };



  messageContent(e){
    e.preventDefault();
    this.setState({
      username:'',
      content:e.target.value,
      sentAt:firebase.database.ServerValue.TIMESTAMP,
      roomId:this.props.activeRoom
    })
  }


  convertMillisToTime(timespan){
    let time = new Date(timespan);
    var theyear = time.getFullYear();
    var themonth = time.getMonth() + 1;
    var thetoday = time.getDate();
    var realTime = time.toLocaleTimeString();

    return  themonth + "/" + thetoday+ "/" + theyear + "("+ realTime+")"


  }



render() {
  const activeRoom = this.props.activeRoom
  const currentMessages= (
    this.state.messages.map((message)=>{
      if (message.roomId===activeRoom){
        return <ol key={message.key}> {message.content}
         Sent at {this.convertMillisToTime(message.sentAt)}</ol>
          }
        return null;
    })
  );
  const messageBox=(
    <form onSubmit ={this.createMessage}>
      <h2> Message Window </h2>
      <textarea type="text" onChange={this.messageContent}/>
      <input type= 'Submit' placeholder="Enter a message..." Value="Submit"/>
    </form>

)

  return (
    <div className="message-list">
    {messageBox}
    {currentMessages}
      </div>

    );
  }
}



export default messageList;