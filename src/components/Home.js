import React from 'react';
import '../styles/global.css';
import { ReactComponent as FolderFiles } from '../folderFiles.svg';
import { Col, Container, Row } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row className="center-align">
        <Col md={5}>
          <h1 className="display-3">LegalEase</h1>
          <h4 class="fw-normal">Effortlessly manage and safeguard your personal information and vital documents, all conveniently stored in one secure location</h4>
        </Col>
        <Col md={7}>
          <FolderFiles className="folderFiles-svg" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
