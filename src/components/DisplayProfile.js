import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const DisplayProfile = () => {
  let { userId } = useParams();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    userId: '',
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',

  });


  let { getUser, deleteUser } = useContext(UserContext)

  useEffect(() => {

    async function fetch() {
        await getUser(userId).then((userId) => setUser(userId));
    }
    fetch();
}, [getUser, userId ]);

  function handleDeleteUser(event) {
    event.preventDefault()
    deleteUser(user.userId).then(() => {
      navigate('/');
    })
  }

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
          <Link to='/editprofile'>Edit User</Link>
          <br />
          <button onClick={handleDeleteUser}>Delete User</button>
        </div>
    );
};

export default DisplayProfile;
