import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
      
      <h1 className="m-0">HomePage</h1>
        <Link to="/">
          <button>
            Homepage
          </button>
        </Link>
        <Link to="/login">
          <button>
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/feed">
          <button>View Hospitals</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;


