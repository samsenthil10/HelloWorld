import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';
import logo from '../assets/img/BridgeLabzLogo.png'

class Home extends React.Component {

  render() {
    return (
      <>
        <nav className="col-1"><img src= {logo} alt="BridgeLabzLogo." width="25%"></img>
        <Link to="/">Home</Link>
        </nav>

        <div className="col-2">

          <header>
            <h1>Bridgelabz is cool</h1>
          </header>
          <main className="content">
            <div className="article-content">
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
            <aside>Aside</aside>
          </main>
          <footer>Footer</footer>
        </div>
      </>


    );
  }
}

export default Home;

