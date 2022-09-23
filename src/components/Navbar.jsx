import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <div className="outerNav">
      <Navbar collapseOnSelect expand="xxl" bg="light" variant="light">
        <Container fluid >
          <Navbar.Brand className="Logo" href="/mortara">Mortara</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" hidden>Features</Nav.Link>
              <Nav.Link href="#pricing" hidden>Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="navigasi" href="/mortara">Home</Nav.Link>
              <Nav.Link className="navigasi" href="/AboutUs">
                About Us
              </Nav.Link>
              <Nav.Link className="navigasi" href="/Portfolio">Portfolio</Nav.Link>
              <Nav.Link className="navigasi" href="/Artikel">
                Artikel
              </Nav.Link>
              <Nav.Link className="navigasi" href="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;