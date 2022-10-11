import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className="m-0">HomePage</h1>
        <a className="m-0" href='../pages/Login.js'>Get into the mind of a Hospital person</a>
      </div>
    </header>
  );
};

export default Header;
