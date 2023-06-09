import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

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
    address: '',
    city: '',
    state: '',
    country: '',
    bank: '',
    license: '',
    social: '',
    birth: '',
    passport: '',
  });

  useEffect(() => {
    async function fetch() {
        await getUser(userId).then((userId) => setUser(userId));
        setVerify(await verifyUser())
    }
    const token = localStorage.getItem('myUserToken');
    if (token) {
      fetch();
    }
}, [getUser, userId ]);

  function handleDeleteUser(event) {
    event.preventDefault();
    deleteUser(user.userId).then(() => {
      navigate('/');
      window.location.reload()
    })
  }

  if (verify) {
    return (
      <div>
          <h2>My Profile</h2>
          <hr />
          <h3>My Profile Information:</h3>
          <p>Username: {user.username}</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phoneNumber}</p>
          <p>Address: {user.streetName}, {user.city} {user.state}, {user.country}</p>
          <p>Bank Info: {user.bank}</p>
          <p>Drivers License: {user.license}</p>
          <p>Social Security: {user.social}</p>
          <p>Birth Certificate: {user.birth}</p>
          <p>Passport: {user.passport}</p>
          <Link to='/editprofile'>Edit User</Link>
          <br />
          <button onClick={handleDeleteUser}>Delete User</button>
        </div>
    );
  } else {
    return (
      <h2>403 NOT SIGNED IN</h2>
    );
  };
};

export default DisplayProfile;
