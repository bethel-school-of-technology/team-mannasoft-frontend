import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let { signInUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:3001/api/users/login', { username, password })
      .then(() => {
        signInUser(username, password)
          .then(() => {
            navigate('/displayprofile');
          })
          .catch((error) => {
            console.log(error);
            window.alert('Failed login');
          });
      })
      .catch((error) => {
        console.log(error);
        window.alert('Failed login');
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <br />
      <Form.Group className="custom-form" controlId="username">
        <Form.Label className="custom-label">Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="password">
        <Form.Label className="custom-label">Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button className="custom-button" type="submit">
        Sign In
      </Button>
    </Form>
  );
};

export default SignIn;
