import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
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
