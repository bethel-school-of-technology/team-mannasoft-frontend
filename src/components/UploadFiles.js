import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const UploadFiles = () => {
  let navigate = useNavigate();
  const [upload, setUpload] = useState('');
  const [description, setDescription] = useState('');

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
        }
      })
      .then((response) => {
        // handle the response
        console.log(response);
        navigate('/viewallfiles');
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

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>File Upload:</Form.Label>
            <Form.Control type="file" onChange={handleFileUpload} />
          </Form.Group>
          <Form.Group>
            <Form.Label>File Description:</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default UploadFiles;
