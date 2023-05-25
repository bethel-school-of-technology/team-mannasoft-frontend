import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/EditProfile.css'
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`/api/users/${user.userId}`, user)
      .then((response) => {
        console.log(response);
        window.alert('Are you sure?')
        // navigate('/profilepage/:userId');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   axios.get(`/api/users/${user.userId}`).then((response) => {
  //     setUser(response.data);
  //   });
  // }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h3>EDIT</h3>
      <span>Username </span>
      <input type="text" name="username" value={user.username} onChange={handleChange} placeholder='Username' className='edit-profile'/>
      <br /><br />

      <span>First Name </span>
      <input type="text" name="firstName" value={user.firstName} onChange={handleChange} placeholder='First Name' className='edit-profile'/>
      <br /><br />

      <span>Last Name </span>
      <input type="text" name="lastName" value={user.lastName} onChange={handleChange} placeholder='Last Name' className='edit-profile'/>
      <br /><br />

      <span>Email </span>
      <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Email' className='edit-profile'/>
      <br /><br />

      <span>Phone Number </span>
      <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} placeholder='888-888-8888' className='edit-profile'/>
      <br /><br />

      <button type="submit" className='edit-button'>Save Changes</button>
    </form>
  );
};

export default EditProfile;
