import React, { useContext, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import '../styles/global.css';

const SignUp = () => {
  const [verify, setVerify] = useState(null)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  let { createUser, verifyUser } = useContext(UserContext);
  let navigate = useNavigate();

  useEffect(() => {

    async function fetch() {
        setVerify(await verifyUser())
    }
    const token = localStorage.getItem('myUserToken');
    if (token) {
      fetch();
    }
}, []);

  function handleSubmit(event) {
    event.preventDefault();
    createUser(username, password, firstName, lastName, email, phoneNumber, streetName, city, state, country)
      .then(() => {
        navigate('/signin');
      })
      .catch((error) => {
        console.log(error);
        window.alert('Failed registration: error creating user');
      });
  }
if (verify) {
  return (
    <h2>You are already signed in</h2>
  )
} else {
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <br />
      <Form.Group className="custom-form" controlId="username">
        <Form.Label className="custom-label">Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="password">
        <Form.Label className="custom-label">Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="firstName">
        <Form.Label className="custom-label">First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="lastName">
        <Form.Label className="custom-label">Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="email">
        <Form.Label className="custom-label">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="phoneNumber">
        <Form.Label className="custom-label">Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="streetName">
        <Form.Label className="custom-label">Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" value={streetName} onChange={(e) => setStreetName(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="city">
        <Form.Label className="custom-label">City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="state">
        <Form.Label className="custom-label">State</Form.Label>
        <Form.Control type="text" placeholder="Enter State" value={state} onChange={(e) => setState(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="country">
        <Form.Label className="custom-label">Country</Form.Label>
        <Form.Control type="text" placeholder="Enter Country" value={country} onChange={(e) => setCountry(e.target.value)} />
      </Form.Group>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
}
};

export default SignUp;
