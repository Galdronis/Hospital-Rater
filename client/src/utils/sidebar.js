import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
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
};