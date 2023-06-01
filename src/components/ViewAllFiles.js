import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Row, Col, Container } from 'react-bootstrap';

const ViewAllFiles = () => {
  const [files, setFiles] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/files", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("myUserToken")}`
        },
      })
      .then((response) => {
        // handle the response
        console.log(response);
        setFiles(response.data)
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  }, [])
  {/* <a href={`http://localhost:3001/api/files/${file.fileId}`}>Download File</a> */ }

  const handleDownload = (e, id) => {
    axios.get(`http://localhost:3001/api/files/${id}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("myUserToken")}`
      }
    })
      .then(response => {
        console.log(response.data)
      })
  }

  return (
    <div>
      <Row xs={1} sm={2} md={3} className="g-4">
        {files.map((file, index) => (
          <Col key={file.fileId}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{file.fileName}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">{file.type}</Card.Subtitle> */}
                <Card.Text>
                  <p> {file.description}</p>
                  <p><button onClick={(e) => handleDownload(e, file.fileId)}>Download File</button>  </p>
                </Card.Text>
              </Card.Body>
              {/* <ListGroup variant="flush">
                {file.tags.map((tag, index) => (
                  <ListGroup.Item key={index}>{tag}</ListGroup.Item>
                ))}
              </ListGroup> */}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ViewAllFiles;
