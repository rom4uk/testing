import React from 'react';
import './header.scss';

import logo from '../../logo.png'

const Header = (props) => {

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={logo} alt="logo" />
            <div className="logo-text">
              <h1>
                <a href="https://github.com/rom4uk" target="_blank">rom4uk</a>
              </h1>
              <span>web developer</span>
            </div>
          </div>
          <div>
            Github users search app
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;