import react from "react";
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';

function Navigation() {
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">About Me</Nav.Link>
        <Nav.Link href="#pricing">Contacts</Nav.Link>
        <NavDropdown title="Projects" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#project-1">Use it or lose it</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#project-2">Professional Workday Scheduler</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#project-3">The Loo Review</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
}

export default Navigation;