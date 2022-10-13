import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">

        <h1 className="m-0">HomePage</h1>
       
        <div className='navBarLinks'>

          <Link to="/">
            <button className='navBarLinks1'>Homepage</button>
          </Link>
          <Link to="/login">
            <button className='navBarLinks1'>Log In</button>
          </Link>
          <Link to="/signup">
            <button className='navBarLinks1'>Sign Up</button>
          </Link>
          <Link to="/feed">
            <button className='navBarLinks1'>View Hospitals</button>
          </Link>
        </div>
       
      </div>
    </header>
  );
};

export default Header;


