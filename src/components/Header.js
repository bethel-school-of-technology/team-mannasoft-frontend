import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                            <span> | </span>
                            <li>
                                <Link to="/aboutus">About Us</Link>
                            </li>
                            <span> | </span>
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                            <span> | </span>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                            <span> | </span>
                            <li>
                                <Link to="/profilepage">View Profile</Link>
                            </li>
                            <span> | </span>
                            <li>
                                <Link to="/editprofile">Edit Profile</Link>
                            </li>
                            <span> | </span>
                            <li>
                                <Link to="/uploadfiles">Upload Files</Link>
                            </li>
                            <span> | </span>
                            <li>
                                <Link to="/viewallfiles">View All Files</Link>
                            </li>
                        </ul>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header