import React, { useContext, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const SignIn = () => {
  const [verify, setVerify] = useState(null)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  let { signInUser, verifyUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
        signInUser(username, password)
        .then(() => {
          navigate(`/displayprofile`)
          window.location.reload()
        })
        .catch(error => {
          console.log(error);
          window.alert('Failed login');
      })
  }

  useEffect(() => {
    async function fetch() {
        setVerify(await verifyUser())
    }
    fetch();
}, []);


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
