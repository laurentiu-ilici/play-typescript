import * as React from 'react';
import './Header.css';

const logo = require('../../assets/vectors/logo.svg');

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <h2 className="headerr">
        Welcome to The tax manager
      </h2>
    </div>
  );
};

export default Header;