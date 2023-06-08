import React from 'react';
import '../styles/global.css';
import { ReactComponent as FolderFiles } from '../images/folderFiles.svg';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <>
      <Container className="center-container">
        <Row className="center-align">
          <Col md={6}>
            <h1 className="display-3">Streamline your life with ease</h1>
            <h3>LegalEase effortlessly manages your personal information and vital documents, all conveniently stored in one secure location</h3>
            <Button variant="secondary">Get Started</Button>
            {/* <Button variant="link">About Us</Button> */}
          </Col>
          <Col md={6}>
            <FolderFiles className="folderFiles-svg" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={6}>
            <h4>01 — Our Users</h4>
            <h2 className="display-6">LegalEase is the trusted solution for individuals and businesses</h2>
          </Col>
          <Col md={3}>
            <h1 className="display-1">25k+</h1>
            <h5>Total Users</h5>
          </Col>
          <Col md={3}>
            <h1 className="display-1">1.5k+</h1>
            <h5>User Ratings</h5>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={6}>
            <h4>02 — Our Services</h4>
            <p>LegalEase</p>
          </Col>
          <Col md={6}>
            <FolderFiles className="folderFiles-svg" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;