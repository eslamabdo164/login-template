import React, { Component } from 'react';
class sign extends Component {
  render() {
    return (
      <div className="sign">
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-3 center">
        <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0">Sign In</legend>
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
                  value="Sign in"/>
                </div>
                <div className="lh-copy mt3">
                  <a href="#0" className="f6 link dim black db">Sign up</a>
                </div>
            </form>
        </main>
        </article>
      </div>
    );
  }
}

export default sign;
