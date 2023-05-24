import React from 'react';
import { Card, ListGroup, Row, Col, Container } from 'react-bootstrap';

// Placeholder data for files
const files = [
  {
    name: 'File 1',
    type: 'PDF',
    tags: ['tag1', 'tag2', 'tag3'],
  },
  {
    name: 'File 2',
    type: 'Image',
    tags: ['tag4', 'tag5'],
  },
  {
    name: 'File 3',
    type: 'Document',
    tags: ['tag1', 'tag3'],
  },
  {
    name: 'File 4',
    type: 'Document',
    tags: ['tag1', 'tag3'],
  },
  {
    name: 'File 5',
    type: 'Document',
    tags: ['tag1', 'tag3'],
  },
  {
    name: 'File 6',
    type: 'Document',
    tags: ['tag1', 'tag3'],
  },
];

const ViewAllFiles = () => {
  return (
    <div>
      <Row xs={1} sm={2} md={3} className="g-4">
        {files.map((file, index) => (
          <Col key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{file.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{file.type}</Card.Subtitle>
              </Card.Body>
              <ListGroup variant="flush">
                {file.tags.map((tag, index) => (
                  <ListGroup.Item key={index}>{tag}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ViewAllFiles;
