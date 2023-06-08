import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from './UserContext';

export const UserProvider = (props) => {
  const [user, setUser] = useState({ signedIn: false });
  const baseUrl = 'http://localhost:3001/api/users/';

  function createUser(username, password, firstName, lastName, email, phoneNumber, streetName, city, state, country) {
    let user = { username, password, firstName, lastName, email, phoneNumber, streetName, city, state, country};

    return axios.post(baseUrl, user).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function signInUser(username, password) {
    let user = { username, password };

    return axios.post(`${baseUrl}login`, user).then((response) => {
      localStorage.setItem('myUserToken', response.data.token);
      setUser({ signedIn: true });
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function getUser(userId) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myUserToken')}`,
    };

    return axios.get(baseUrl + userId, {headers: myHeaders}).then((response) => {
      return new Promise(resolve => resolve(response.data));
    });
  }

  function editUser(userId, username, email, phoneNumber, bank, license, socialSecurityNumber, birthCertificate, passportNumber) {
    let user = { username, email, phoneNumber, bank,  license, socialSecurityNumber, birthCertificate, passportNumber };

    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myUserToken')}`,
    };
    return axios.put(baseUrl + userId, user, { headers: myHeaders }).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function signOutUser() {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myUserToken')}`,
    };

    return axios.post(baseUrl + 'signout', null, { headers: myHeaders }).then((response) => {
      localStorage.removeItem('myUserToken', response.data.token);
      setUser({ signedIn: false });
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function deleteUser(userId) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myUserToken')}`,
    };

    return axios.delete(baseUrl + userId, { headers: myHeaders }).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <UserContext.Provider
      value={{
        user,
        signOutUser,
        createUser,
        signInUser,
        getUser,
        editUser,
        deleteUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

