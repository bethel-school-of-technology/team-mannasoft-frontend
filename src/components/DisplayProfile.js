import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import axios from 'axios';

const DisplayProfile = () => {
  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  useEffect(() => {
    axios
      .get('/api/users')
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let { deleteUser } = useContext(UserContext)

  function handleDeleteUser(userId) {
    deleteUser(userId)
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
      <Link to="/editprofile/:id">Edit User</Link>
      <br /> <br />
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  );



    // return (
    //   <UserContext.Consumer>
    //     {
    //       ({ user }) => {
    //         return <div>
    //           <h3>My Profile Information:</h3>
    //           {console.log(user)}
    //           <div>
    //             {user.map((u) => {
    //               return <div key={u.id}>
    //                   <p>Username: {u.username}</p>
    //                   <p>Name: {u.firstName} {u.lastName}</p>
    //                   <p>Email: {u.email}</p>
    //                   <p>Phone Number: {u.phoneNumber}</p>

    //                   <button>Edit User</button>
    //                 </div>
    //             })}
    //           </div>
    //         </div>
    //       }
    //     }
    //   </UserContext.Consumer>
    // )
};

export default DisplayProfile;
