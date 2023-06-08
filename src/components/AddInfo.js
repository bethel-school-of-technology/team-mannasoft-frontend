import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import '../styles/global.css';

const AddInfo = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [socialSecurityNumber, setSocial] = useState('');
  const [bank, setBank] = useState('');
  const [license, setLicense] = useState('');
  const [birthCertificate, setBirth] = useState('');
  const [passportNumber, setPassport] = useState('');

  let { moreInfo } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    moreInfo(city, state, bank, license, social, birth, passport)
      .then(() => {
        navigate('/displayprofile');
      })
      .catch((error) => {
        console.log(error);
        window.alert('Failed Addition: error adding more info for user');
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1>More Info</h1>
      <br />
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
      <Form.Group className="custom-form" controlId="bank">
        <Form.Label className="custom-label">Bank Details</Form.Label>
        <Form.Control type="text" placeholder="Enter Bank Details" value={bank} onChange={(e) => setBank(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="license">
        <Form.Label className="custom-label">Driver License</Form.Label>
        <Form.Control type="text" placeholder="Enter Driver License" value={license} onChange={(e) => setLicense(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="social">
        <Form.Label className="custom-label">Social Security</Form.Label>
        <Form.Control type="text" placeholder="Enter Social Security" value={socialSecurityNumber} onChange={(e) => setSocial(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="birth">
        <Form.Label className="custom-label">Birth Certificate</Form.Label>
        <Form.Control type="text" placeholder="Enter Birth Certificate" value={birthCertificate} onChange={(e) => setBirth(e.target.value)} />
      </Form.Group>
      <Form.Group className="custom-form" controlId="passport">
        <Form.Label className="custom-label">Passport</Form.Label>
        <Form.Control type="text" placeholder="Enter Passport" value={passportNumber} onChange={(e) => setPassport(e.target.value)} />
      </Form.Group>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default AddInfo;
