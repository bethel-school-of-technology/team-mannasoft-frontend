import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// import EditProfile from './EditProfile';
import UserContext from '../contexts/UserContext';
import axios from 'axios';

const DisplayProfile = () => {
  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    axios
      .get('/api/users')
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUserChange = (user) => {
    setUser(user);
  };

  let { deleteUser } = useContext(UserContext);

  function handleDeleteUser(userId) {
    deleteUser(userId);
  }

  return (
    <div>
      <h2>My Profile</h2>
      {/* <EditProfile user={user} onUserChange={handleUserChange} /> */}
      <hr />
      <h3>My Profile Information:</h3>
      <p>Username: {user.username}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <Link to="/editprofile">Edit User</Link>
      <br />
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  );
};

export default DisplayProfile;
