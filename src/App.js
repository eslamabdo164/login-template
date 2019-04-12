import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    route : 'signin'
  }
  render() {
    return (
      <div className="App">
        <p>Hello From inside the Website</p>
        <a class="f6 link dim ph3 pv2 mb2 dib white bg-black" href="#0"> Signout </a>
      </div>
    );
  }
}

export default App;
