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
              <div className="rating" style={{ paddingTop: '10vw' }}>
                <div className="rating-comment">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="var(--accent-color)" viewBox="0 0 256 256">
                    <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,72ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z"></path>
                  </svg>
                  <br />
                  {rating.comment}
                </div>
                <div className="rating-name">{rating.name}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={6}>
            <h4>02 — Our Services</h4>
            <p>At LegalEase, we are dedicated to simplifying the management of your personal information and vital documents. Our comprehensive suite of services empowers you to organize, securely store, and effortlessly access your important files from one convenient platform. With our user-friendly interface and robust security features, you can trust LegalEase to streamline your document management process, providing you with peace of mind and valuable time savings. Discover how our innovative solutions can transform the way you manage and protect your personal information.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Document Organization</Card.Title>
                <Card.Text>LegalEase offers a comprehensive and intuitive system to efficiently organize, categorize, and manage your personal information and important documents, ensuring easy accessibility whenever you need them.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Secure Storage</Card.Title>
                <Card.Text>With LegalEase, you can confidently store your sensitive documents in one secure location, protected by robust encryption and advanced security measures, providing peace of mind knowing that your information is safe and confidential.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Smart Document Management</Card.Title>
                <Card.Text>LegalEase utilizes intelligent algorithms and advanced search functionalities, enabling you to quickly find specific documents, extract relevant information, and streamline your document management process, saving you valuable time and effort.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
