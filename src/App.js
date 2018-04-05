import React, { Component } from 'react';
import logo from './logo256.png';
import './App.css';
import Countdown from './Countdown.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Energi Cryptocurrency</h1>
        </header>
        <Countdown />
      </div>
    );
  }
}

export default App;
