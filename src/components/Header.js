import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Header = () => {
  return (
    <div className="nav-container">
      <Navbar className="nav">
        <Container>
          <Nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/profilepage">View Profile</Link>
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
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

// const Header = () => {
//     return (
//         <div className="nav-container">
//             <Navbar className="nav">
//                 <Container>
//                     <Nav>
//                         <ul>
//                             <li>
//                                 <Link to="/">Home</Link>
//                             </li>
//                             <span> | </span>
//                             <li>
//                                 <Link to="/aboutus">About Us</Link>
//                             </li>
//                             <span> | </span>
//                             <li>
//                                 <Link to="/signin">Sign In</Link>
//                             </li>
//                             <span> | </span>
//                             <li>
//                                 <Link to="/signup">Sign Up</Link>
//                             </li>
//                             <span> | </span>
//                             <li>
//                                 <Link to="/profilepage">View Profile</Link>
//                             </li>
//                             <span> | </span>
//                             <li>
//                                 <Link to="/editprofile">Edit Profile</Link>
//                             </li>
//                             <span> | </span>
//                             <li>
//                                 <Link to="/uploadfiles">Upload Files</Link>
//                             </li>
//                             <span> | </span>
//                             <li>
//                                 <Link to="/viewallfiles">View All Files</Link>
//                             </li>
//                         </ul>
//                     </Nav>
//                 </Container>
//             </Navbar>
//         </div>
//     )
// }

export default Header;
