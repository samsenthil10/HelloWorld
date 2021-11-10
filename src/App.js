import React from 'react';
import './App.css';
import logo from './assets/img/BridgeLabzLogo.png'

class App extends React.Component {
  constructor() {
    super();
    this.state = { title: "Hello From Bridgelabz!!!" }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src = {logo} alt = "Bridgelabz logo"></img>
      </div>
    );
  }
}

export default App;
