import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  let { createUser } = useContext(UserContext);
  let navigate = useNavigate();

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   axios
  //     .post('/api/users/', { username, password })
  //     .then(() => {
  //       createUser(username, password, firstName, lastName, email, phoneNumber)
  //         .then(() => {
  //           navigate('/signin');
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           window.alert('Failed registration: error creating user');
  //         });
  //     })
  // }

  function handleSubmit(event) {
    event.preventDefault();
    createUser(username, password, firstName, lastName, email, phoneNumber).then(() => {
      navigate('/signin');
    }).catch(error => {
      console.log(error);
      window.alert('Failed registration: error creating user')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>REGISTER</h1>
      <br />
      <br />
      <span>Username </span>
      <input placeholder="Enter UserName" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <br />
      <span>Password </span>
      <input placeholder="Enter Password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <span>First Name </span>
      <input placeholder="Enter first" type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br />
      <br />
      <span>Last Name </span>
      <input placeholder="Enter last" type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <br />
      <br />
      <span>Email </span>
      <input placeholder="Enter Email" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />
      <span>Phone Number </span>
      <input placeholder="Enter Email" type="number" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <br />
      <br />
      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;