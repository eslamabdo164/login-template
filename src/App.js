import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/home';
import Signin from './components/sign/sign'
class App extends Component {
  state= {
    route : 'signin'
  }
  render() {
    return (
      <div className="App">

      {this.state.route === 'signin'? 
        <Signin /> : 
        <Homepage />  
      }
      </div>
    );
  }
}

export default App;
