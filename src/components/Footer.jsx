import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const Footer = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      event.preventDefault();
      axios.post(url,{
        email: data.email,
        name: data.name,
        number: data.number,
        address: data.address,
        inquiry: data.inquiry
      })
      .then(res=> {
        console.log(res.data)
      })
      setValidated(true);
    }
  };

    const url = ""
    const [data, setData] = useState({
      email: "",
      name: "",
      number: "",
      address: "",
      inquiry: ""
    })
    function handle(e){
      const newdata = {...data}
      newdata[e.target.id] =  e.target.value
      setData(newdata)
      console.log(newdata)
    }

  return (
    <>
    <Container className="containerForm mt-5" fluid>
      <Form className="form mt-5 p-5" noValidate validated={validated} onSubmit={handleSubmit}>
      <h3 className="titleForm mb-5">Asked About News and updates <br/> about your future home.</h3>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Your Email Address"
              defaultValue=""
              className="form-control"
              onChange={(e)=>handle(e)}
              id="email"
              value={data.email}
              />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Your Name"
              defaultValue=""
              className="form-control"
              onChange={(e)=>handle(e)}
              id="name"
              value={data.name}
              />
          </Form.Group>
          </Row>
          <Form.Group as={Col} className="mb-3" controlId="validationCustom03">
            <Form.Control onChange={(e)=>handle(e)} id="number" value={data.number} className="mt-3 form-group" type="number" placeholder="Your Mobile Number *" aria-label="Your Mobile Number *" aria-describedby="basic-addon1" required/>

            <Form.Control onChange={(e)=>handle(e)} id="address" value={data.address} className="mt-3 form-group" type="text" placeholder="Your Current Home Address *" aria-label="Your Mobile Number *" aria-describedby="basic-addon1" required/>

            <FloatingLabel controlId="floatingTextarea2" label="Your Inquiry">
              <Form.Control
                required
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
                className="mt-3 form-group"
                onChange={(e)=>handle(e)}
                id="inquiry"
                value={data.inquiry}
                />
            </FloatingLabel>
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
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
        <div className="location-footer">
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