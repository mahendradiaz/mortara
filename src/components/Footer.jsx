import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Footer = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
    <Form className="form mt-5 p-5" noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Your Email Address"
            defaultValue=""
            className="form-control"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Your Name"
            defaultValue=""
            className="form-control"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Form.Group as={Col} className="mb-3" controlId="validationCustom03">
          <Form.Control className="mt-3 form-group" type="number" placeholder="Your Mobile Number *" aria-label="Your Mobile Number *" aria-describedby="basic-addon1" required/>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

          <Form.Control className="mt-3 form-group" type="text" placeholder="Your Current Home Address *" aria-label="Your Mobile Number *" aria-describedby="basic-addon1" required/>

          <FloatingLabel controlId="floatingTextarea2" label="Your Inquiry">
            <Form.Control
              required
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
              className="mt-3 form-group"
            />
          </FloatingLabel>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
    </Form>
    </>
  )
}

export default Footer