import React from 'react';
import '../styles/NavbarComponent.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ReactComponent as LegaleaseLogo } from '../images/legaleaseLogo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className="custom-navbar">
      <Navbar.Brand href="#home">
        <LegaleaseLogo alt="" width="120" height="30" className="d-inline-block align-top" style={{ marginRight: '20px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <div className="d-flex align-items-center dropdown">
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <NavDropdown title="Profile" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/displayprofile">View Profile</NavDropdown.Item>
              <NavDropdown.Item href="/uploadfiles">Upload Files</NavDropdown.Item>
              <NavDropdown.Item href="/viewallfiles">View All Files</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
