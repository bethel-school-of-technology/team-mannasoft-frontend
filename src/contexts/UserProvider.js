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

  function createUser(user) {
    //let user = { username, password };

    return axios.post(baseUrl, user).then(response => {return new Promise(resolve => resolve(response.data))})
    // const response = axios.post(baseUrl, user);
    // return new Promise((resolve) => resolve(response.data));
  }

  function signInUser(username, password) {
    let user = { username, password };

    return axios.post(`${baseUrl}login`, user)
    .then(response => {
      localStorage.setItem('myTweetToken', response.data.token)
      return new Promise(resolve => resolve(response.data))
    })
    // const response = axios.post(`${baseUrl}login`, user);
    // localStorage.setItem('myUserToken', response.data.token);
    // return new Promise((resolve) => resolve(response.data));
  }

  function getUser(userId, username, firstname, lastname, email, phoneNumber) {
    let profile = { username, firstname, lastname, email, phoneNumber }
    
    return axios.get(baseUrl + user.userId, profile).then(response => setUser(response.data));
}

  function editUser(userId, username, email, phoneNumber) {
    let user = { username, email, phoneNumber };

    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myTweetToken')}`
    };

    return axios.put(baseUrl + userId, user, { headers: myHeaders })
    .then(response => {
      getUser();
      return new Promise(resolve => resolve(response.data));
    })
  };

  function deleteUser(userId) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myTweetToken')}`
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
