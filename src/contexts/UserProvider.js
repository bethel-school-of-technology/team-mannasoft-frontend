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

  async function createUser(username, password) {
    let user = { username, password };

    const response = await axios.post(baseUrl, user);
    return await new Promise(resolve => resolve(response.data));
    // const response = axios.post(baseUrl, user);
    // return new Promise((resolve) => resolve(response.data));
  }

  async function signInUser(username, password) {
    let user = { username, password };

    const response = await axios.post(`${baseUrl}login`, user);
    localStorage.setItem('myCoffeeToken', response.data.token);
    return await new Promise(resolve => resolve(response.data));
    // const response = axios.post(`${baseUrl}login`, user);
    // localStorage.setItem('myUserToken', response.data.token);
    // return new Promise((resolve) => resolve(response.data));
  }

  async function getUser(userId, username, firstname, lastname, email, phoneNumber) {
    let profile = { username, firstname, lastname, email, phoneNumber }
    
    const response = await axios.get(baseUrl + userId, profile);
    return setUser(response.data);
}

  async function editUser(userId, username, email, phoneNumber) {
    let user = { username, email, phoneNumber };

    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myCoffeeToken')}`
    };

    const response = await axios.put(baseUrl + userId, user, { headers: myHeaders });
    getUser();
    return await new Promise(resolve => resolve(response.data));
  };

  async function deleteUser(userId) {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myCoffeeToken')}`
    };

    return axios.delete(baseUrl + userId, { headers: myHeaders })
        .then(response => {
            getUser();
            return new Promise(resolve => resolve(response.data));
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
