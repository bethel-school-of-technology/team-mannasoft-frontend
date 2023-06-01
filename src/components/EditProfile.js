import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import '../styles/global.css';

const EditProfile = () => {
  let { editUser, getUser } = useContext(UserContext);
  let { userId } = useParams();
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    async function fetch() {
        await getUser(userId).then((userId) => setUser(userId));
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
    editUser(user.userId, user.username, user.email, user.phoneNumber)
      .then(() => {
        console.log(user.username)
        navigate('/displayprofile');
      })
      .catch((error) => {
        console.log(error);
        window.alert('Failed Edit: error updating user');
      });
};

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
        <Form.Control type="text" name="email" value={user.email} onChange={handleChange} placeholder="Email" className="edit-profile" />
      </Form.Group>

      <Form.Group className="custom-form" controlId="phoneNumber">
        <Form.Label className="custom-label">Phone Number</Form.Label>
        <Form.Control type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleChange} placeholder="888-888-8888" className="edit-profile" />
      </Form.Group>

      <Button type="submit" className="custom-button">
        Save Changes
      </Button>
    </Form>
  );
}

export default EditProfile;