import React, { useContext, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const DeleteUser = () => {
    let { userId } = useParams();
    const [verify, setVerify] = useState(null)
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({
      userId: '',
    });

    let { deleteUser, verifyUser, getUser } = useContext(UserContext);
    let navigate = useNavigate();
  
    useEffect(() => {
      async function fetch() {
          await getUser(userId).then((userId) => setUser(userId));
          setVerify(await verifyUser())
      }
      const token = localStorage.getItem('myUserToken');
      if (token) {
        fetch();
      }
  }, [getUser, userId]);

//  , password

    function handleDeleteUser(event) {
        event.preventDefault();
        deleteUser(user.userId)
        .then(() => {
          console.log(user.userId)
          console.log(password)
          navigate('/');
          window.location.reload()
        })
        .catch(error => {
          console.log(error);
          console.log(user.userId)
          console.log(password)
          window.alert('Failed To Delete');
        })
      }
  
  
  if (verify) {
    return (
        <Form onSubmit={handleDeleteUser}>
        <h1>Confirm This Action With Your Password</h1>
        <br />
        <Form.Group className="custom-form" controlId="password">
          <Form.Label className="custom-label">Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button className="custom-button" type="submit">Terminate Account</Button>
      </Form>
    );
  } else {
    return (
        <h2>403 NOT SIGNED IN</h2>
    );
  }
  };
  
  export default DeleteUser;
  