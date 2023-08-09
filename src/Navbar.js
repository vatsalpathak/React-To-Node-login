import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './nav.css';
import photo from './assets/paclife.png';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav>
       <img src= {photo} alt="Logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={() => logout()}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={() => loginWithRedirect()}>Login</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
