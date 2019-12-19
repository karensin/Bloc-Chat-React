import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dimensions from 'react-dimensions';

import * as firebase from 'firebase';
import './Projects.css';

class Square extends Component {
    constructor(props){
      super(props);
    }
    render (){
       
        return (

            <div className= "wrapper"> 
                <a href = {this.props.linkSrc} > 
                    <div className={this.props.className}
                        style={{
                            height:this.props.containerWidth,
                            backgroundImage:"url(" + this.props.imgSrc + ")"
                        }}>
                        {this.props.children}
                    </div>
                </a>
            </div>
        );
    }
}

export default Dimensions()(Square);
