import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Header = () => {
  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/displayprofile">View Profile</Link>
          </li>
          <li>
            <Link to="/editprofile">Edit Profile</Link>
          </li>
          <li>
            <Link to="/uploadfiles">Upload Files</Link>
          </li>
          <li>
            <Link to="/viewallfiles">View All Files</Link>
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
    </div>
  );
};

export default Header;
