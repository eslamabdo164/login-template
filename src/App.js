import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/home';
import Signin from './components/sign/sign';
import Signup  from './components/signup/signup'
class App extends Component {
  state= {
    route : 'signin'  // (3) values expected :  register or home 
  }


  changeRoute = (route) =>{
    this.setState({route})
  }


  render() {
    return (
      <div className="App">

      {/* if (state = 'signin) { } ifelse( ) { } else { } */}
      
      {
        this.state.route === 'signin'? 
        <Signin changeRoute ={this.changeRoute} /> : 
        (
          this.state.route === 'register' ? 
           <Signup changeRoute = {this.changeRoute} /> : 
           <Homepage changeRoute ={this.changeRoute} />  
        )
      }
      </div>
    );
  }
}

export default App;
