import * as React from "react";
import { Link } from "gatsby";


export const Navbar = () => {
    return (
      <nav className="nav">
        <div className="nav__container">
          <Link to="/" className="nav__brand">
            <img src="logo.svg" className="nav__logo" />
          </Link>
  
          <div className="nav__right">
            <ul className="nav__item-wrapper">
              <li className="nav__item">
                <Link className="nav__link" to="/plants">Plant Medicine</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/shamanic">Shamanic Healing</Link>
              </li>
              <li className="nav__item">
                <Link className="nav__link" to="/reiki">Reiki Master</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }