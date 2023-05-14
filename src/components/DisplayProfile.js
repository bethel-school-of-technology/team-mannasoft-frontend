import React, { useState } from 'react';
import EditProfile from './EditProfile';

const DisplayProfile = () => {
  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const handleUserChange = (user) => {
    setUser(user);
  };

  return (
    <div>
      <h2>My Profile</h2>
      <EditProfile user={user} onUserChange={handleUserChange} />
      <hr />
      <h3>My Profile Information:</h3>
      <p>Username: {user.username}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
    </div>
  );
};

export default DisplayProfile;
