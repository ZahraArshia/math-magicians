import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';

function NavBar() {
  return (
    <nav>
      <h1>
        Math Magicians
        <span> </span>
        <img alt="magicHat" src="https://img.icons8.com/external-soft-fill-juicy-fish/60/000000/external-wizard-video-game-elements-soft-fill-soft-fill-juicy-fish.png" />
      </h1>
      <ul className="navLink">
        <li className="navItem"><Link to="/"><span>Home</span></Link></li>
        <span>|</span>
        <li className="navItem"><Link to="/calculator">Calculator</Link></li>
        <span>|</span>
        <li className="navItem"><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <>
      <main className="home">
        <h2>Welcome to the homepage!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </main>
    </>
  );
}

function Quote() {
  return (
    <section className="quote">
      <p>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding.
      </p>
      <p>- William Paul Thurston</p>
    </section>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}
