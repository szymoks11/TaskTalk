import React from 'react';
import "./header.css"
import logo  from './logo.png';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar  sticky="top" collapseOnSelect bg="dark" variant='dark' expand="lg">
    <Container>

      <Navbar.Brand href="/"><img src={logo} alt='logo' width='30' height='30' className='d-inline-block align-top'/>   TaskTalk</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Strona Główna</Nav.Link>
          <Nav.Link href="#link">Tablice</Nav.Link>
          <NavDropdown title="Mój projekt" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Akcja1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Akcja2
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Akcja3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Pomoc
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href='/login'>Zaloguj się</Nav.Link>
          <Nav.Link href='/signup'>Zacznij korzystać z TaskTalk za darmo!</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
