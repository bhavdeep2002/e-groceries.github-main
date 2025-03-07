import React, { Component } from 'react';

import "../../styles/styles.css"
import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(){
    super()
  
  }
  render() {
    return (

      <header>
        <nav className="navbar navbar-expand-lg bg-white" >
          <div className="container-fluid" id='nav'>
            <Link className="navbar-brand" to="#"><img id='logo' src="/image/baner.PNG" alt='' /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav"  >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-a" to="/Vegitables&Friuts">Vegitables & Friuts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a" to="/Dairy&Breakfast">Dairy & Breakfast</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-a" to="/ColdDrink&Juice">Cold Drink & Juice</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;