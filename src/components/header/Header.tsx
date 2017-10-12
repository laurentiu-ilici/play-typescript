import * as React from 'react';
import { Link } from 'react-router';
import './Header.css';

const logo = require('../../assets/vectors/logo.svg');
export interface HeaderProps {
  children: {};
}

class Header extends React.Component {
  render() {
     return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <h2 className="headerr">
          Welcome to The tax manager
        </h2>
        <nav>
          <Link to="/info">Info Page</Link>
          <Link to="/overview">Home Page</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default Header;