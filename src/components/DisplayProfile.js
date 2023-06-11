import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PencilSquare, Upload } from 'react-bootstrap-icons';


const DisplayProfile = () => {
  let { userId } = useParams();
  let navigate = useNavigate();
  let { getUser, deleteUser, verifyUser } = useContext(UserContext);
  const [verify, setVerify] = useState(null);
  const [user, setUser] = useState({
    userId: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    async function fetch() {
      await getUser(userId).then((userId) => setUser(userId));
      setVerify(await verifyUser());
    }
    const token = localStorage.getItem('myUserToken');
    if (token) {
      fetch();
    }
  }, [getUser, userId]);

  function handleDeleteUser(event) {
    event.preventDefault();
    deleteUser(user.userId).then(() => {
      navigate('/');
      window.location.reload();
    });
  }

  if (verify) {
    return (
      <Container className="page-container">
        <Row>
          <Col md={6}>
            <h3 className="display-4">
              {user.firstName} {user.lastName}
            </h3>
          </Col>
          <Col md={3}>
            <h6>Username</h6>
            <p>{user.username}</p>

            <h6>Full Name</h6>
            <p>
              {user.firstName} {user.lastName}
            </p>
          </Col>

          <Col md={2}>
            <h6>Email</h6>
            <p>{user.email}</p>

            <h6>Phone Number</h6>
            <p>{user.phoneNumber}</p>
          </Col>
        </Row>

        <Row className="custom-padding">
          <Col md={2}>
            <Button variant="secondary" href="/editprofile">
              Edit Profile
            </Button>
          </Col>
          <Col md={2}>
            <Button variant="danger" onClick={handleDeleteUser}>
              Deactivate Account
            </Button>
          </Col>
          <Col md={5}></Col>
          <Col md={2}>
            <Button href="/uploadfiles">
              <Upload />
              &nbsp;&nbsp;Upload Files
            </Button>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <h2>403 NOT SIGNED IN</h2>;
  }
};

export default DisplayProfile;
