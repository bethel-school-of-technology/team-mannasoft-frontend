import React from 'react';
import '../styles/global.css';
import { ReactComponent as FolderFiles } from '../images/folderFiles.svg';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Row className="center-align">
        {/* <Col md={5}>
          <h1 className="display-3">LegalEase</h1>
          <h4 class="fw-normal">Effortlessly manage and safeguard your personal information and vital documents, all conveniently stored in one secure location</h4>
          <Button>Get Started</Button>
          <Button variant="link">About Us</Button>
        </Col> */}
        <Col md={6}>
          <h3 class="display-6">LegalEase effortlessly manages your personal information and vital documents, all conveniently stored in one secure location</h3>
          <Button>Get Started</Button>
          <Button variant="link">About Us</Button>
        </Col>
        {/* <Col md={7}>
          <FolderFiles className="folderFiles-svg" />
        </Col> */}
        <Col md={6}>
          <FolderFiles className="folderFiles-svg" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
