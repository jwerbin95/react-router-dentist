import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Home'
import Contacts from './Contacts'
import Procedures from './Procedures'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Contacts />
        <Procedures />
      </div>
    );
  }
}

export default App;
