import React from 'react';
import './App.css';
import logo from './assets/img/BridgeLabzLogo.png'

class App extends React.Component {

  url = "https://www.bridgelabz.com/"
  constructor() {
    super();
    this.state = { title: "Hello From Bridgelabz!!!" }
  }

  OnClick = ($event) => {

    window.open(this.url, "_blank");
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src = {logo} onClick = { this.OnClick } alt = "Bridgelabz logo"></img>
      </div>
    );
  }
}

export default App;
