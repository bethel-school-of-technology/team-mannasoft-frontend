import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfile = () => {
  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

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
      .put(`/api/user/${user.userId}`, user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get(`/api/user/${userId}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" value={user.username} onChange={handleChange} />

      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" value={user.firstName} onChange={handleChange} />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" value={user.lastName} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="text" name="email" value={user.email} onChange={handleChange} />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} />

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProfile;
