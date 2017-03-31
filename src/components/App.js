import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";

import Auth0Lock from 'auth0-lock';
import NavLink from './NavLink';


var firebase = require('firebase');


var config = {
    apiKey: "AIzaSyDXRuk7_9feWL_1wpuWRaf1GX1tVUkl80I",
    authDomain: "toni-7698c.firebaseapp.com",
    databaseURL: "https://toni-7698c.firebaseio.com",
    storageBucket: "toni-7698c.appspot.com",
    messagingSenderId: "346071305707"
  };
  firebase.initializeApp(config);



class App extends Component {
  constructor(){
    super();
    this.state = {
      idToken:'',
      profile: {}
    }
  }




  static get defaultProps() {
    return{
    clientId: '7bpnrZlwJqq3gNxeWSU4bulT2FwSVRxm',
    domain: 'tonicaktas.eu.auth0.com'
   }
  }

componentDidMount() {
  this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
  // this.lock = new Auth0Lock(this.props.clientId, this.props.domain, {
  //   auth: {
  //     redirectUrl: '${window.location.origin}/edit',
  //     responsiveType: 'token'
  //   }
  // })

  this.lock.on('authenticated',(authResult) => {
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if(error){
        console.log(error);
        return;
      }
      this.setdata(authResult.idToken, profile);
    });
  });

  this.getData();
  d3.select('.main-content').style('visibility','visible').style('background', '#cccccc');

}


// sparar i localStorage
setdata(idToken, profile){
  localStorage.setItem('idToken', idToken);
  localStorage.setItem('profile',JSON.stringify(profile));
  this.setState({
    idToken: localStorage.getItem('idToken'),
    profile: JSON.parse(localStorage.getItem('profile'))
  });
}

// kollar om data om inlog uppgifter finns i localStorage

getData(){
  if(localStorage.getItem('idToken') !=null ){
    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    }, () => {
      console.log(this.state);

    });
  }
}






showLock(){
  this.lock.show();

  d3.select('.main-content').style('visibility','visible').style('background', '#cccccc');


}

logout() {
  this.setState({
    idToken: '',
    profile: ''
  }, () => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('profile');
    localStorage.clear();

  });
 d3.select('.main-content').style('visibility','hidden').style('background', '#000');
}



tomt(){
  if(!this.state.idToken){
    d3.select('.main-content').style('visibility','hidden').style('background', '#cccccc');
        } else {
    d3.select('.main-content').style('visibility','visible').style('background', '#cccccc');
      }
  }




  render() {



    let navItems;
    if(this.state.idToken){

      navItems =
      <div className="navholder">
        <NavLink onClick={this.logout.bind(this)} href="#">Logout</NavLink>
        <ul className="main-nav">


          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Larare">Preview</NavLink></li>
          <li><NavLink to="/edit">edit</NavLink></li>
          <li><NavLink to="/print">Print</NavLink></li>
        </ul>

      </div>
    } else if(!this.state.idToken){

      navItems =
      <div className="navholder">


              <NavLink onClick={this.showLock.bind(this)} className="icn-logo">Login</NavLink>
              <ul className="main-nav">
          </ul>
      </div>




    }

    return (
      <div className="container">
        <header>
        {navItems}


        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;
