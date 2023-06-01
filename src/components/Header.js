import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LegaleaseLogo } from '../images/legaleaseLogo.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import UserContext from '../contexts/UserContext';

// const Header = () => {
//   const { user } = useContext(UserContext);

//   return (
//     <div>
//       <div className="nav">
//         <ul>
//           <li>
//             <Link to="/">
//               <LegaleaseLogo className="logo" />
//             </Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>

//           {user && user.signedIn && (
//             <>
//               <li>
//                 <Link to="/displayprofile">View Profile</Link>
//               </li>
//               <li>
//                 <Link to="/editprofile">Edit Profile</Link>
//               </li>
//               <li>
//                 <Link to="/uploadfiles">Upload Files</Link>
//               </li>
//               <li>
//                 <Link to="/viewallfiles">View All Files</Link>
//               </li>
//             </>
//           )}
//         </ul>

//         <ul className="nav-right">
//           {!user || !user.signedIn ? (
//             <>
//               <li>
//                 <Link to="/signin">Sign In</Link>
//               </li>
//               <li>
//                 <Link className="nav-signup" to="/signup">
//                   <span className="signup-link">Sign Up</span>
//                 </Link>
//               </li>
//             </>
//           ) : null}
//         </ul>
//       </div>
//     </div>
//   );
// };

const Header = () => {
  const [user, setUser] = useState({
    firstName: '',
  });

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
          <li>
            <Link to="/about">Lorem ipsum</Link>
          </li>
          {/* <li>
            <Link to="/displayprofile">View Profile</Link>
          </li> */}
          {/* <li>
            <Link to="/editprofile">Edit Profile</Link>
          </li> */}

          <NavDropdown title={`Hello, ${user.firstName}`} id="basic-nav-dropdown">
            <NavDropdown.Item href="/displayprofile">View Profile</NavDropdown.Item>
            <NavDropdown.Item href="/uploadfiles">Upload Files</NavDropdown.Item>
            <NavDropdown.Item href="/viewallfiles">View All Files</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <li>
            <Link to="/about">Lorem ipsum</Link>
          </li>
          {/* <li>
            <Link to="/uploadfiles">Upload Files</Link>
          </li>
          <li>
            <Link to="/viewallfiles">View All Files</Link>
          </li> */}
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


export default Header;
