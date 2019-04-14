import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/home';
import Signin from './components/sign/sign'
class App extends Component {
  state= {
    route : 'signin'
  }

  changeRoute = (route) =>{
    this.setState({route})
  }
  render() {
    return (
      <div className="App">

      {this.state.route === 'signin'? 
        <Signin changeRoute ={this.changeRoute} /> : 
        <Homepage changeRoute ={this.changeRoute} />  
      }
      </div>
    );
  }
}

export default App;
