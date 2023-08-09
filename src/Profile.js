import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Profile.css';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <div>You are not logged in!</div>;
  }
console.log(user)
  return (
    <div className="container">
    {/* <img src={user.picture} alt={user.name} /> */}
    <div>
      <div>Name:</div>
      <div>{user.name}</div>
    </div>
    <div>
      <div>Email:</div>
      <div>{user.email}</div>
    </div>
    <div>
      <div>Nickname:</div>
      <div>{user.nickname}</div>
    </div>
    <div>
      <div>Given Name:</div>
      <div>{user.given_name}</div>
    </div>
    <div>
      <div>Family Name:</div>
      <div>{user.family_name}</div>
    </div>
    <div>
      <div>Last Updated:</div>
      <div>{user.updated_at}</div>
    </div>
  </div>
);
};

export default Profile;