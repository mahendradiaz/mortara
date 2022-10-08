import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
  return (
    <div className="outerNav">
      <Navbar collapseOnSelect expand="xxl" bg="light" variant="light">
        <Container fluid>
          <Navbar.Brand className="Logo" href="/">Mortara</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" hidden>Features</Nav.Link>
              <Nav.Link href="#pricing" hidden>Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="navigasi" href="/">Home</Nav.Link>
              <Nav.Link className="navigasi" href="/aboutus">
                About Us
              </Nav.Link>
              <Nav.Link className="navigasi" href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link className="navigasi" href="/artikel">
                Artikel
              </Nav.Link>
              <Nav.Link className="navigasi" href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;