import axios from 'axios';
import { useEffect, useState } from 'react';
import UserContext from './UserContext';

export const UserProvider = (props) => {
  const [ user, setUser ] = useState([]);
  const baseUrl = 'http://localhost:3001/api/users/';

  useEffect(() => {
    async function fetchData() {
        getUser();
    }
    fetchData();
  }, []);

  function createUser(username, password) {
    let user = { username, password };

    return axios.post(baseUrl, user).then(response => {return new Promise(resolve => resolve(response.data))})
    // const response = axios.post(baseUrl, user);
    // return new Promise((resolve) => resolve(response.data));
  }

  function signInUser(username, password) {
    let user = { username, password };

    return axios.post(`${baseUrl}/login`, user)
    .then(response => {
      localStorage.setItem('myUserToken', response.data.token)
      return new Promise(resolve => resolve(response.data))
    })
    // const response = axios.post(`${baseUrl}/login`, user);
    // localStorage.setItem('myUserToken', response.data.token);
    // return new Promise((resolve) => resolve(response.data));
  }

  function getUser(username, firstname, lastname, email, phoneNumber) {
    let profile = { username, firstname, lastname, email, phoneNumber }
    
    return axios.get(baseUrl, profile).then(response => setUser(response.data));
}

  function editUser(userId, username, password, email, phoneNumber) {
    let user = { username, password, email, phoneNumber };

    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
    };

    return axios.put(baseUrl + userId, user, { headers: myHeaders })
    .then(response => {
      getUser();
      return new Promise(resolve => resolve(response.data));
    })
  };

  function deleteUser(userId) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
    };

    return axios.delete(baseUrl + userId, { headers: myHeaders })
    .then(response => {
      getUser();
      return new Promise(resolve => resolve(response.data))
    });
  }

  return (
    <UserContext.Provider
      value={{
        user,
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
