import React from 'react';
import '../styles/global.css';
import { ReactComponent as PersonalFiles } from '../images/personalFiles.svg';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Home() {
  // Generate fake user ratings
  const userRatings = [
    {
      name: 'John Doe',
      comment: 'Great app! Highly recommended.',
    },
    {
      name: 'Jane Smith',
      comment: 'Excellent service. Very satisfied.',
    },
    {
      name: 'David Johnson',
      comment: 'Helped me organize my documents effectively.',
    },
  ];

  return (
    <>
      <Container className="center-container">
        <Row className="center-align">
          <Col md={6}>
            <h1 className="display-3">Streamline your life with ease</h1>
            <h4>LegalEase effortlessly manages your personal information and vital documents, all conveniently stored in one secure location</h4>
            <Button variant="secondary" href="/signup">
              Get Started
            </Button>
          </Col>
          <Col md={6}>
            <PersonalFiles />
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
        <Row>
          {userRatings.map((rating, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Text style={{ fontSize: '20px' }}>"{rating.comment}"</Card.Text>
                  <Card.Title>{rating.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={6}>
            <h4>02 — Our Services</h4>
            <p>LegalEase</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
