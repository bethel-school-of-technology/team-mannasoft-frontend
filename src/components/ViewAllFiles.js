import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
import UserContext from '../contexts/UserContext';

// Different file types have assigned icons

const ViewAllFiles = () => {
  const [files, setFiles] = useState([]);
  const [verify, setVerify] = useState(null)
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  let { verifyUser } = useContext(UserContext);

  useEffect(() => {
    async function fetch() {
      axios
        .get('http://localhost:3001/api/files', {headers: {Authorization: `Bearer ${localStorage.getItem('myUserToken')}`}})
        .then((response) => {
          console.log(response);
          setFiles(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      setVerify(await verifyUser())
  }
  const token = localStorage.getItem('myUserToken');
  if (token) {
    fetch();
  }
  }, []);

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
        setFiles(filesNew);
      })
      .catch((err) => {
        console.log(err);
      });
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

  if (verify) {
    return (
      <div>
      <Button href='http://localhost:3000/uploadfiles'>Upload File</Button>
      <Form.Control type="text" placeholder="Search by file name" value={searchQuery} onChange={handleSearch} />

      <Form.Select value={sortOrder} onChange={handleSort}>
        <option value="asc">Sort A to Z</option>
        <option value="desc">Sort Z to A</option>
      </Form.Select>

      <Row xs={1} sm={2} md={3} className="g-4">
        {filteredFiles.map((file, index) => (
          <Col key={file.fileId}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{file.fileName}</Card.Title>
                <Card.Text>
                  <p> {file.description}</p>
                  <p>
                    <Button href={'http://localhost:3001/api/files/download/' + file.storedName}>Download</Button>
                    <Button onClick={(e) => handleDelete(e, file.fileId)}>Delete</Button>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    );
  } else {
    return (
      <h2>403 NOT SIGNED IN</h2>
    )
  }
};

export default ViewAllFiles;
