import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Auth from './auth';

export default props => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  if (Auth.loggedIn() === false) {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Home Page
        </a>
        <a className="menu-item" href="/login">
          Log In
        </a>
        <a className="menu-item" href="/signup">
          Sign Up
        </a>
        <a className="menu-item" href="/feed">
          View Hospitals
        </a>
      </Menu>
    );
  } else if (Auth.loggedIn() === true) {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Home Page
        </a>
        <a className="menu-item" href="/" onClick={logout}>
          Log Out 
        </a>
        <a className="menu-item" href="/feed">
          View Hospitals
        </a>
      </Menu>
    );
  }
};