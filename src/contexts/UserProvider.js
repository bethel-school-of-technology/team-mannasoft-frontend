import axios from 'axios';
import UserContext from './UserContext';

export const UserProvider = (props) => {
  //the url for the backend user functions
  const baseUrl = 'http://localhost:3001/api/users/';

  //Fields for the sign up user
  function createUser(username, password, firstName, lastName, email, phoneNumber) {
    let user = { username, password, firstName, lastName, email, phoneNumber };

    //posts to the url the populated fields, then returns the response data
    return axios.post(baseUrl, user).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  //sign in using the username and password fields
  function signInUser(username, password) {
    let user = { username, password };

    //posts to the url login, then responds by giving the user token
    return axios.post(`${baseUrl}login`, user).then((response) => {
      localStorage.setItem('myUserToken', response.data.token);
      return new Promise((resolve) => resolve(response.data));
    });
  }

  //gets the user information
  function getUser(userId) {
    //myHeaders holds the current token
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myUserToken')}`,
    };

    //get request to the url/userId and gives the authorization token. Then returns the populated fields.
    return axios.get(baseUrl + userId, { headers: myHeaders }).then((response) => {
      return new Promise(resolve => resolve(response.data));
    });
  }

  //edit user's username, email, and phone number.
  function editUser(userId, username, email, phoneNumber) {
    let user = { username, email, phoneNumber };

    //myHeaders holds the current token
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myUserToken')}`,
    };

    //put request to the url/userid, populates the new info into the username, email, and phone number fields and gives the authorization token. 
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
      return new Promise((resolve) => resolve(response.data));
    });
  }

  //delete the user by their Id
  function deleteUser(userId) {
    //myHeaders holds the current token
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myUserToken')}`,
    };

    //deletes the user by the id. Uses the authorization token to allow the user to delete their profile. Deletes the authorization token.
    return axios.delete(baseUrl + userId, { headers: myHeaders }).then((response) => {
      localStorage.removeItem('myUserToken', response.data.token);
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function verifyUser() {
    let myHeaders = {
      Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
    };
    return axios.get(baseUrl + "verifyuser", { headers: myHeaders })
      .then(response => {
        return new Promise(resolve => resolve(response.data));
      }).catch((error) =>
        new Promise((_, reject) => reject(error.response.statusText))
      )
  }

  return (
    <UserContext.Provider
      value={{
        signOutUser,
        createUser,
        signInUser,
        getUser,
        editUser,
        deleteUser,
        verifyUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
