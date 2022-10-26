import React, { useState }from 'react'
import Menu from '../components/Navbar'
import { Form } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


const Contact = () => {
  const [validated, setValidated] = useState(false)
  const [loading, setLoading] = useState(false)

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const url = "http://localhost/mortara/onSubmitContact.php"

      let fData = new FormData()
      fData.append('firstName', firstName)
      fData.append('lastName', lastName)
      fData.append('email', email)
      fData.append('number', number)
      fData.append('message', message)
      
      axios.post(url, fData)
      .then(response => alert(response.data))
      .catch(error => alert (error))
    }
    setValidated(true);

    setLoading(true)
  }
  
  return (
    <>
      <Menu />    
      <div className="bg-contact">
          <h1>Contact</h1>
        <div className="content-contact">
          <div className="address">
            <h3>Contact Us</h3>
            <p className="mt-5 d-flex">
              <i className="bi bi-geo-alt mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
              </i>Jl. H. Juanda No. 26, Situgintung, Cireundeu, Ciputat Timur, Tangerang Seglatan
            </p>
            <p className="mt-5 d-flex">
              <i className="bi bi-geo-alt mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
              </i>info@mortara.id
            </p>
            <p className="mt-5 d-flex">
              <i className="bi bi-geo-alt mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              </i>+62 812 2349 2192
            </p>
            <p className="mt-5 d-flex">
              <i className="bi bi-geo-alt mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
              </i>mortara.id
            </p>
          </div>
          <div className="formAddress">
            <h3>Get In Touch</h3>
            <Form className="contact-form mt-5" noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="container-form d-flex" >
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label className="label">First Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue=""
                    className="form-contact" 
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label className="label">Last Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue=""
                    className="form-contact" 
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
              </div>
              <div className="container-form d-flex mt-4" >
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label className="label">Email</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue=""
                    className="form-contact" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label className="label">No. Telp</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    defaultValue=""
                    className="form-contact" 
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    />
                </Form.Group>
              </div>
              <div className="container-form d-flex mt-4" >
                <Form.Group as={Col} className="mb-3" controlId="validationCustom03">
                  <Form.Label className="label">Message</Form.Label>
                  <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control
                      required
                      as="textarea"
                      type="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '70px' }}
                      className="form-contact" 
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      />
                  </FloatingLabel>
                </Form.Group>
              </div>
              <Button type="submit" bsPrefix="btnForm">
              {loading ? 'Sending...': 'Send'}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact