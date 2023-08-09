import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './Home';
import Profile from './Profile';
import Navbar from './Navbar';
// import Loading from './Loading';
import authConfig from './auth_config.json';

const App = () => {
  return (
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      audience={authConfig.audience}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  );
};

export default App;
