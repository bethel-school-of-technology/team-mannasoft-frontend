import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button, Toast } from 'react-bootstrap';
import UserContext from '../contexts/UserContext';

const UploadFiles = () => {
  let navigate = useNavigate();
  const [verify, setVerify] = useState(null);
  const [upload, setUpload] = useState('');
  const [description, setDescription] = useState('');
  const [show, setShow] = useState(false);

  let { verifyUser } = useContext(UserContext);

  useEffect(() => {
    async function fetch() {
      setVerify(await verifyUser());
    }
    const token = localStorage.getItem('myUserToken');
    if (token) {
      fetch();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(upload);
    const formData = new FormData();
    formData.append('file', upload);
    formData.append('description', description);

    console.log(formData.get('description'));

    axios
      .post('http://localhost:3001/api/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('myUserToken')}`,
        },
      })
      .then((response) => {
        // handle the response
        if (response.data.file === 'file already exists') {
          setShow(true);
        } else {
          navigate('/viewallfiles');
        }
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });
  };

  const handleFileUpload = (e) => {
    let file = e.target.files[0];

    setUpload(file);
  };
  if (verify) {
    return (
      <Container className="page-container">
        <h1 className="display-5" style={{ paddingBottom: '20px' }}>
          Upload Files
        </h1>
        {show && (
          <div className="mb-5 d-flex justify-content-center">
            <Toast onClose={() => setShow(false)} show={show} delay={3000}>
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Error</strong>
              </Toast.Header>
              <Toast.Body>Duplicate File Found!</Toast.Body>
            </Toast>
          </div>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            {/* <Form.Label>File Upload:</Form.Label> */}
            <Form.Control type="file" onChange={handleFileUpload} />
          </Form.Group>
          <Form.Group>
            {/* <Form.Label>File Description:</Form.Label> */}
            <Form.Control
              placeholder="File Description"
              as="textarea"
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>
          <div style={{ paddingTop: '20px' }}>
            <Button variant="secondary" href="/displayprofile">
              Back
            </Button>
            <Button variant="primary" type="submit" style={{ marginLeft: '10px' }}>
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    );
  } else {
    return <h2>403 NOT SIGNED IN</h2>;
  }
};

export default UploadFiles;
