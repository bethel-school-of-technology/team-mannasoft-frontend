import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="nav-container">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
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
                </ul>
            </nav>
        </div>
    )
}

export default Header