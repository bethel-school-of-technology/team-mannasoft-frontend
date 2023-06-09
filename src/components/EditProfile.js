import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../styles/global.css';

const EditProfile = () => {
  const [verify, setVerify] = useState(null)
  let { editUser, getUser, verifyUser } = useContext(UserContext);
  let { userId } = useParams();
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    country: '',
    bank: '',
    license: '',
    socialSecurityNumber: '',
    birthCertificate: '',
    passportNumber: '',
  });

  useEffect(() => {
    async function fetch() {
        await getUser(userId).then((userId) => setUser(userId));
        setVerify(await verifyUser())
    }
    fetch();
}, [getUser, userId ]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    editUser(user.userId, user.username, user.email, user.phoneNumber, user.bank, user.license, user.socialSecurityNumber, user.birthCertificate, user.passportNumber)
      .then(() => {
        navigate('/displayprofile');
      })
      .catch((error) => {
        console.log(error);
        window.alert('Failed Edit: error updating user');
      });
};

if(verify) {
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Edit Profile</h1>
      <br />

      <Form.Group className="custom-form" controlId="username">
        <Form.Label className="custom-label">Username</Form.Label>
        <Form.Control type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" className="edit-profile" />
      </Form.Group>

      <Form.Group className="custom-form" controlId="email">
        <Form.Label className="custom-label">Email</Form.Label>
        <Form.Control type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" className="edit-profile" />
      </Form.Group>

      <Form.Group className="custom-form" controlId="phoneNumber">
        <Form.Label className="custom-label">Phone Number</Form.Label>
        <Form.Control type="tel" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} placeholder="888-888-8888" className="edit-profile" />
      </Form.Group>

      <Form.Group className="custom-form" controlId="bank">
        <Form.Label className="custom-label">Bank Number</Form.Label>
        <Form.Control type="text" name="bank" value={user.bank} onChange={handleChange} placeholder="01234567890" className="edit-profile" />
      </Form.Group>

      <Form.Group className="custom-form" controlId="license">
        <Form.Label className="custom-label">License Number</Form.Label>
        <Form.Control type="text" name="license" value={user.license} onChange={handleChange} placeholder="a123456789000" className="edit-profile" />
      </Form.Group>

      <Form.Group className="custom-form" controlId="social">
        <Form.Label className="custom-label">Social Security Number</Form.Label>
        <Form.Control type="text" name="social" value={user.social} onChange={handleChange} placeholder="123-456-789" className="edit-profile" />
      </Form.Group>

      <Form.Group className="custom-form" controlId="birth">
        <Form.Label className="custom-label">Birth Certificate</Form.Label>
          <Form.Control type="text" name="birth" value={user.birth} onChange={handleChange} placeholder="111-1111 1111111" className="edit-profile" />
      </Form.Group>

      <Form.Group className="custom-form" controlId="passport">
        <Form.Label className="custom-label">Passport Number</Form.Label>
        <Form.Control type="text" name="passport" value={user.passport} onChange={handleChange} placeholder="12345678" className="edit-profile" />
      </Form.Group>

      <Button type="submit" className="custom-button">
        Save Changes
      </Button>
    </Form>
  )
} else {
  return (
    <h2>403 NOT SIGNED IN</h2>
  )
}
}

export default EditProfile;