import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import photo from './assets/login.jpg';

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Welcome to my app!</h1>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src={photo} alt="Logo" style={{ height: '50%' }} />
          <h1>To Proceed click on Login Button!</h1>
        </div>
      )}
    </>
  );
};

export default Home;