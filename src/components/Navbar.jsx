import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoMortara from '../img/logo-mortara.png'
import { Offcanvas } from 'react-bootstrap';

function Menu() {
  return (
      <>
      {["xxl"].map((expand) => (
        <Navbar expand={expand} bg="light" className="Navbar mb-3" fixed="top">
          <Container fluid>
            <Navbar.Brand href="/" className="Logo"><img src={LogoMortara} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton closeVariant="black">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="Logo">
                  <img src={LogoMortara} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/aboutus">About Us</Nav.Link>
                  <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                  <Nav.Link href="/article">Article</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        ))}
      </>
    )
}

export default Menu;