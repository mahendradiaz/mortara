import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoMortara from '../img/logo-mortara.png'

function Menu() {
  return (
      <Navbar collapseOnSelect expand="xxl" bg="light" variant="light" fixed="top">
        <Container fluid>
          <Navbar.Brand className="Logo" href="/"><img src={LogoMortara} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#features" hidden>Features</Nav.Link>
              <Nav.Link href="#pricing" hidden>Pricing</Nav.Link>
            </Nav>
            <Nav className="me-auto">
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
  );
}

export default Menu;