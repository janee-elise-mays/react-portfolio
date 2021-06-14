import react from "react";
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

function Navigation() {
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#about-me">About Me</Nav.Link>
        <Nav.Link href="#contact-me">Contact</Nav.Link>
        <NavDropdown title="Work" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#upcoming-projects">Coming Soon</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
}

export default Navigation;