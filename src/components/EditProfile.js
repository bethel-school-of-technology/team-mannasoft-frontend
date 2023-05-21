import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import '../styles/global.css';

const EditProfile = () => {
  const [user, setUser] = useState({
    username: '',
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
      .put(`/api/users/${user.userId}`, user)
      .then((response) => {
        console.log(response);
        window.alert('Are you sure?');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios.get(`/api/users/${user.userId}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <br />
        <Form.Control type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" className="edit-profile" />
      </Form.Group>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <br />
        <Form.Control type="text" name="firstName" value={user.firstName} onChange={handleChange} placeholder="First Name" className="edit-profile" />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <br />
        <Form.Control type="text" name="lastName" value={user.lastName} onChange={handleChange} placeholder="Last Name" className="edit-profile" />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <br />
        <Form.Control type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email" className="edit-profile" />
      </Form.Group>

      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <br />
        <Form.Control type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} placeholder="888-888-8888" className="edit-profile" />
      </Form.Group>

      <Button type="submit" className="custom-button">
        Save Changes
      </Button>
    </Form>
  );
};

export default EditProfile;
