import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';

// Placeholder data for files
// const files = [
//   {
//     name: 'File 1',
//     type: 'PDF',
//     tags: ['tag1', 'tag2', 'tag3'],
//   },
//   {
//     name: 'File 2',
//     type: 'Image',
//     tags: ['tag4', 'tag5'],
//   },
//   {
//     name: 'File 3',
//     type: 'Document',
//     tags: ['tag1', 'tag3'],
//   },
//   {
//     name: 'File 4',
//     type: 'Document',
//     tags: ['tag1', 'tag3'],
//   },
//   {
//     name: 'File 5',
//     type: 'Document',
//     tags: ['tag1', 'tag3'],
//   },
//   {
//     name: 'File 6',
//     type: 'Document',
//     tags: ['tag1', 'tag3'],
//   },
// ];

const ViewAllFiles = () => {
  const [files, setFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/files', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('myUserToken')}`,
        },
      })
      .then((response) => {
        // handle the response
        console.log(response);
        setFiles(response.data);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  }, []);
  {
    /* <a href={`http://localhost:3001/api/files/${file.fileId}`}>Download File</a> */
  }

  const handleDownload = (e, id) => {
    axios
      .get(`http://localhost:3001/api/files/download/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('myUserToken')}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  const handleDelete = (e, id) => {
    axios
      .delete(`http://localhost:3001/api/files/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('myUserToken')}`,
        },
      })
      .then((response) => {
        console.log(response);
        const filesNew = files.filter((file) => {
          return file.fileId !== id;
        });
        setFiles(filesNew)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedFiles = files.sort((a, b) => {
    const fileNameA = a.fileName.toLowerCase();
    const fileNameB = b.fileName.toLowerCase();
    if (sortOrder === 'asc') {
      return fileNameA.localeCompare(fileNameB);
    } else {
      return fileNameB.localeCompare(fileNameA);
    }
  });

  const filteredFiles = sortedFiles.filter((file) => file.fileName.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <Form.Control type="text" placeholder="Search by file name" value={searchQuery} onChange={handleSearch} />

      <Form.Select value={sortOrder} onChange={handleSort}>
        <option value="asc">Sort A to Z</option>
        <option value="desc">Sort Z to A</option>
      </Form.Select>

      <Row xs={1} sm={2} md={3} className="g-4">
        {filteredFiles.map((file, index) => (
          // {files.map((file, index) => (
          <Col key={file.fileId}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{file.fileName}</Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">{file.type}</Card.Subtitle> */}
                <Card.Text>
                  <p> {file.description}</p>
                  <p>
                    {/* <button onClick={(e) => handleDownload(e, file.fileId)}>Download File</button> */}
                    <Button href={'http://localhost:3001/api/files/download/' + file.storedName}>Download</Button>
                    <Button onClick={(e) => handleDelete(e, file.fileId)}>Delete</Button>
                  </p>
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
