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

  onNameChange = (event) => {

    const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    this.setState({ userName: event.target.value });
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: "" })
    }
    else {
      this.setState({ nameError: "Invalid Name" })
    }
  }

  render() {
    return (
      <><div>
        <h1>Hello {this.state.userName} From Bridgelabz!!!</h1>
        <img src={logo} onClick={this.onClick} alt="Bridgelabz logo"></img>
      </div><div>
          <input onChange={this.onNameChange}></input>
          <span className="error-output">{this.state.nameError}</span>
        </div></>
    );
  }
}

export default App;
