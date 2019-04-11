import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    route : ''
  }
  render() {
    return (
      <div className="App">
        <p>Hello From inside the Website</p>
        <a>Sign out</a>
      </div>
    );
  }
}

export default App;
