
import React, { Component } from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoom:'',
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
     });
   }


   handleChange(e){
      this.setState({name: e.target.value});
   }

   componentWillUnmount(){
     this.roomsRef.off();
   }

   createRoom(e, newRoom){

     if (newRoom) {
       e.preventDefault();
       this.roomsRef.push({
          name: newRoom
        });
         this.setState({newRoom:''});
      }
    }

       handleRoomInput(e){
         this.setState({newRoom:e.target.value});
       }
   render () {
     return (
         <div>
          <ul className='roomList'>
           {
             this.state.rooms.map( (room) =>
               <li key={room.key}>{room.name}</li>
             )
           }

           <form onSubmit={(e)=> this.createRoom(e,this.state.newRoom)}>
              <label>
                New room:
                <input type="text" value={this.state.newRoom} onChange={e => this.handleRoomInput(e)}/>
              </label>
            <input type= "Submit" value="Create Room"/>
          </form>



        </ul>
   </div>
     );
   }
 }

export default RoomList;
