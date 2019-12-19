import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 
 import './Bubbles.css';

class Bubbles extends Component {
    constructor(props){
      super(props);
    }
    render (){
       
        return (

            <div className= "bubble" style={{
                // left:this.props.x,
                // top:this.props.y,
                position: "absolute"
            }}>  
            </div>
        );
    }
}

export default Bubbles;
