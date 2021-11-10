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
      <><div class="placeAtCenter">
        <h1>Hello {this.state.userName} From Bridgelabz!!!</h1>
        <img src={logo} onClick={this.onClick} alt="Bridgelabz logo"></img>
      </div><div class="placeAtCenter">
          <input onChange={this.onNameChange}></input>
          <span className="error-output">{this.state.nameError}</span>
        </div><main class="content">
          <div id="article-content">
            <article>
              <p>At Bridgelabz,we're a techie community of</p>
            </article>
            <article>
              <ul>
                <li>Technologists</li>
                <li>Thinkers</li>
                <li>Builders</li>
              </ul>
              <p>
                Working togeter to keep the tech Employability of engineers alive and accesible,so Tech Companies worldwide can get contributors and creators for Technology solutions.We believe this act of human collaboration across an Employability platform is essential
                to individual growth and our collective future.
              </p>
            </article>
            <article>
              <p>
                To know about us,visit <a href="https://www.bridgelabz.com/">Bridgelabz</a> to learn even more about our mission i.e <strong> Employability to all</strong>
              </p>
            </article>
          </div>

        </main></>

    );
  }
}

export default App;

