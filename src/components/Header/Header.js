import React from 'react';
import './header.scss';

import logo from '../../logo.svg'

const Header = (props) => {

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="logo">
            <img src={logo} alt="logo" />
            <div className="logo-text">
              <h1>
                REQUESTRUM
              </h1>
              <span>web development company</span>
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