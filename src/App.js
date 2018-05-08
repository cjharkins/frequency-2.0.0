import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Aggregate extends Component {
  render(){
    return (
      <div style={{display: 'inline-block', 'font-size': '.5em',margin: '20px'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render(){
    return (
      <div>
        <input type="text" />
        <img src="" alt="" />
      </div>
    );
  }
}

class Playlist extends Component {
  render(){
    return (
      <div style={{display: 'inline-block', width: '25%', margin: '20px'}}>
        <img />
        <h3>Playlist Name</h3>
        <h4>Genre</h4>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Frequency</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
