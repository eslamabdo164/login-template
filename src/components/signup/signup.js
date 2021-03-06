import React, { Component } from 'react';
class Signup extends Component {
  render() {
    return (
      <div className="sign">
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-3 center">
        <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                  </div>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                  </div>
                </fieldset>
                <div className="">
                  <input 
                  onClick = {() => this.props.changeRoute('home')} // Well This mean Do Not Excute till click
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="button" 
                  value="Sign up"/>
                </div>
            </form>
        </main>
        </article>
      </div>
    );
  }
}

export default Signup;
