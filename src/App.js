import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from ' ./components/Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

export default App;
