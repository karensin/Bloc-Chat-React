
import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoom:'',
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.handleUserInput = this.handleUserInput.bind(this);
    this.createRoom = this.createRoom.bind(this);
     this.setActiveRoom = this.props.setActiveRoom.bind(this);
  }


    componentDidMount() {
      this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState({ rooms: this.state.rooms.concat(room)});
      });
    }
    createRoom(){
      if (!this.state.newRoom.trim()!=='')
        {
          this.roomsRef.push(
        {
          name: this.state.newRoom,
        }
      );
      this.setState({newRoom:''})
    }
      else {
          alert('Enter a room name');
          this.setState({
            newRoom:'',
          });
      }
    }

    handleUserInput(e){
  this.setState({
    newRoom: e.target.value});
}

   handleRoomSelect(room){
     this.props.setActiveRoom(room);
   }




   render () {

     return (
       <div className="room-list">
           <h1>{this.props.activeRoom ? this.props.activeRoom.name : 'Select a Chat Room'}</h1>
           <ul>
           {this.state.rooms.map( room =>
             <li key={room.key}>
             <button className="create-room" onClick={(e) => this.handleRoomSelect(room,e)}>{room.name}</button>
             </li>

           )}
           </ul>

           <input type="text" placeholder="Enter new room name..." value={this.state.newRoom} onChange={this.handleUserInput}/>
           <button onClick={this.createRoom}>Create New Room</button>
         </div>
       );
     }
   }


export default RoomList;
