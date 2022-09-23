import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <Navbar collapseOnSelect expand="xxl" bg="light" variant="light">
      <Container fluid className="outerNav">
        <Navbar.Brand className="Logo" href="/">Mortara</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" hidden>Features</Nav.Link>
            <Nav.Link href="#pricing" hidden>Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="navigasi" eventKey={1} href="/">Home</Nav.Link>
            <Nav.Link className="navigasi" eventKey={2} href="/AboutUs">
              About Us
            </Nav.Link>
            <Nav.Link className="navigasi" eventKey={3} href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link className="navigasi" eventKey={4} href="/Artikel">
              Artikel
            </Nav.Link>
            <Nav.Link className="navigasi" eventKey={5} href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;