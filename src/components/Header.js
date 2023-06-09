import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as LegaleaseLogo } from '../images/legaleaseLogo.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserContext from '../contexts/UserContext';

const Header = () => {
  let navigate = useNavigate();
  const [verify, setVerify] = useState(null);
  let { userId } = useParams();

  const [user, setUser] = useState({
    firstName: '',
  });

  let { getUser, signOutUser, verifyUser } = useContext(UserContext);

  const handleSignOut = (event) => {
    event.preventDefault();
    signOutUser()
      .then(() => {
        navigate('/');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        window.alert('Failed Edit: error updating user');
      });
  };

  useEffect(() => {
    async function fetch() {
      await getUser(userId).then((userId) => setUser(userId));
      setVerify(await verifyUser());
    }

    const token = localStorage.getItem('myUserToken');
    if (token) {
      fetch();
    }
  }, [getUser, userId]);

  if (verify) {
    /*  START render when user is SIGNED IN*/
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to="/">
              <LegaleaseLogo className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul className="nav-right">
          <NavDropdown title={`Hello ${user.firstName}`} id="basic-nav-dropdown">
            <NavDropdown.Item href="/displayprofile">View Profile</NavDropdown.Item>
            <NavDropdown.Item href="/uploadfiles">Upload Files</NavDropdown.Item>
            <NavDropdown.Item href="/viewallfiles">View All Files</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
          </NavDropdown>
        </ul>
      </div>
    );
    /*  END render when user is SIGNED IN*/

    /* START no render when user is SIGNED OUT */
  } else {
    return (
      <div className="nav">
        <ul>
          <li>
            <Link to="/">
              <LegaleaseLogo className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <ul className="nav-right">
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link className="nav-signup" to="/signup">
              <span className="signup-link">Sign Up</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  /* END no render when user is SIGNED OUT */
};

export default Header;
