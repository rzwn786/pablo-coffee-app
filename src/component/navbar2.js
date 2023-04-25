import { useState } from "react"
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import "./navbar2.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a className="brand-logo">
        <img src={require('./assets/logo2.png')} /> 
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
              <FaBars/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/menu'>Menu</Link>
            </li>
            <li>
                <Link to='/contact'>Locate Us</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}