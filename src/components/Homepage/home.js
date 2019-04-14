import React, { Component } from 'react';
class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
       {/* list all Your Project Components */}
        <p>Hello From inside the Website</p>
        <a 
        onClick ={()=> this.props.changeRoute('signin') }
        className="f6 link dim ph3 pv2 mb2 dib white bg-black" 
        type="button"
        href="#0"> Signout </a>
      </div>
    );
  }
}

export default Homepage;
