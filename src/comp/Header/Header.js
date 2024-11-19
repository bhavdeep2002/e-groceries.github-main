import React, { Component } from 'react';

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
            <a className="navbar-brand" to="#"><img id='logo' src="/image/baner.PNG" alt='' /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav"  >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-a" to="/Everything">Everything</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a" to="/Groceries">Groceries</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a" to="/Juice">Juice</a>
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