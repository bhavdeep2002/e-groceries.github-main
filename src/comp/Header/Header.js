import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/styles.css"

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
                  <Link className="nav-link" to="/Everything">Everything</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Groceries">Groceries</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Juice">Juice</Link>
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