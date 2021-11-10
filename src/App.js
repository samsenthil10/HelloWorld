import React from 'react';
import './App.css';
import logo from './assets/img/BridgeLabzLogo.png'

class App extends React.Component {

  url = "https://www.bridgelabz.com/"
  constructor() {
    super();
    this.state = { userName: "" }
  }

  onClick = ($event) => {

    window.open(this.url, "_blank");
  }

  onNameChange=(event)=>{
    console.log("value is",event.target.value);
    this.setState({userName:event.target.value})
  }

  render() {
    return (
      <><div>
        <h1>Hello {this.state.userName} From Bridgelabz!!!</h1>
        <img src={logo} onClick={this.onClick} alt="Bridgelabz logo"></img>
      </div><div>
          <input onChange={this.onNameChange}></input>
        </div></>
    );
  }
}

export default App;
