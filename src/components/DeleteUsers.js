import React, { useContext, useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const DeleteUser = () => {
  let { userId } = useParams();
  const [verify, setVerify] = useState(null);
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({
    userId: '',
  });

  let { deleteUser, verifyUser, getUser } = useContext(UserContext);
  let navigate = useNavigate();

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
  deleteUser(user.userId, password)
    .then(() => {
      navigate('/');
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      window.alert('Failed To Delete');
    });
  }

  if (verify) {
    return (
      <Container className="page-container">
        <Row>
          <h3>Enter your password to confirm account deactivation</h3>

          <Col md={6}>
            <Form onSubmit={handleDeleteUser}>
              <br />
              <Form.Group className="custom-form" controlId="password">
                <Form.Label className="custom-label">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Button className="custom-button" variant="danger" type="submit">
                Terminate Account
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <h2>403 NOT SIGNED IN</h2>;
  }
};

export default DeleteUser;
