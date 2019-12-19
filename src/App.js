import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './App.css';
import Projects from './components/Projects.js';
  

 
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
       
    }

  

      render() {
 
        return (
          <div className="App">

         <header className="App-header">
            <h1 className="App-title">Welcome</h1>
         </header>
         <div class='topnav'>
             
              </div>
            <h2> </h2>
            <Projects/>
             
          </div>
        );
      }
    }
  export default App;
