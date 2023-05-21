import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let { signInUser } = useContext(UserContext);
  let navigate = useNavigate();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   axios
  //     .post('/api/login', { username, password })
  //     .then(() => {
  //       signInUser(username, password)
  //         .then(() => {
  //           navigate('/displayprofile');
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           window.alert('Failed login');
  //         });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       window.alert('Failed login');
  //     });
  // }

  function handleSubmit(event) {
    event.preventDefault();
    signInUser(username, password)
      .then(() => {
        navigate('/displayprofile');
      })
      .catch((error) => {
        console.log(error);
        window.alert('Failed login');
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <br />
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <br />
        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button className="custom-button" type="submit">
        Sign In
      </Button>
    </Form>
  );
};

export default SignIn;
