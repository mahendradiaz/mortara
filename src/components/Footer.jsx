import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Container } from 'react-bootstrap'
import axios from 'axios'

const Footer = () => {
  const [validated, setValidated] = useState(false)
  const [loading, setLoading] = useState(false)


  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const url = "http://localhost/mortara/onSubmit.php"

      let fData = new FormData()
      fData.append('email', email)
      fData.append('name', name)
      fData.append('number', number)
      fData.append('address', address)
      fData.append('inquiry', inquiry)
      
      axios.post(url, fData)
      .then(response => alert(response.data))
      .catch(error => alert (error))
    }
    setValidated(true);

    setLoading(true)
  }

    return (
      <>
      <Container className="containerForm mt-5" fluid>
        <Form className="form mt-5 p-5" noValidate validated={validated} onSubmit={handleSubmit}>
        <h3 className="titleForm mb-5">Asked About News and updates <br/> about your future home.</h3>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label className="labelFooter">Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Your Email Address"
                defaultValue=""
                className="form-control" 
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group as={Col} md="6" className="inputName" controlId="validationCustom02">
              <Form.Label className="labelFooter">Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Your Name"
                defaultValue=""
                className="form-control" 
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>
            </Row>
            <Form.Group as={Col} className="mb-3" controlId="validationCustom03">
              <Form.Control type="number" className="mt-3 form-group" name="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Your Mobile Number *" aria-label="Your Mobile Number *" aria-describedby="basic-addon1" required/>

              <Form.Control type="text" className="mt-3 form-group" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Your Current Home Address *" aria-label="Your Mobile Number *" aria-describedby="basic-addon1" required/>

              <FloatingLabel controlId="floatingTextarea2" label="Your Inquiry">
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  className="mt-3 form-group" 
                  name="inquiry"
                  value={inquiry}
                  onChange={(e) => setInquiry(e.target.value)}
                  />
              </FloatingLabel>
            </Form.Group>
            <Button variant="dark" type="submit">
              {loading ? 'Submitting...': 'Submit'}
            </Button>
        </Form>
        <div className="location mt-5 p-5">
          <div className="location-footer">
            <h3>Location</h3>
            <p className="mt-3">South Tangerang</p>
            <p>Jl. Ir. H. Juanda No.26,</p>
            <p>Situ Gintung, Cireundeu, Kec.</p>
            <p>Ciputat Timur</p>
          </div>
          <div className="location-footer mt-5">
            <h3>Phone & Email</h3>
            <p className="mt-3">+62 812 2349 2192</p>
            <p>mortaraconstruction@gmail.com</p>
          </div>
          <div>
            <h3>Follow us on :</h3>
          </div>
        </div>
      </Container>
      </>
    )
}
export default Footer