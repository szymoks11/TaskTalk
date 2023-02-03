import React from 'react';
import "./header.css"
import logo  from './logo.png';
import {Container, Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const Header_tables = () => {
  return (
    <Navbar  sticky="top" collapseOnSelect bg="dark" variant='dark' expand="lg">
    <div className='header'>

      <Navbar.Brand href="/"><img src={logo} alt='logo' width='30' height='30' className='d-inline-block align-top'/>   TaskTalk</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Przestrzenie robocze" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Przestrzeń robocza TaskTalk</NavDropdown.Item>
            <NavDropdown.Divider /> 
            {/* dorobic skrypt do zczytywania przestrzeni i dodawania ich do listy */}
            <NavDropdown.Item href="#action/3.1">Przestrzeń robocza TaskTalk</NavDropdown.Item> 
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1">Przestrzeń robocza TaskTalk</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="me-auto">
          <NavDropdown title="Ostatnie" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Przestrzeń robocza TaskTalk</NavDropdown.Item>
            <NavDropdown.Divider /> 
            {/* dorobic skrypt do zczytywania przestrzeni i dodawania ich do listy */}
            <NavDropdown.Item href="#action/3.1">Przestrzeń robocza TaskTalk</NavDropdown.Item> 
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1">Przestrzeń robocza TaskTalk</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav className="me-auto">
          <NavDropdown title="Oznaczone gwiazdką" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Przestrzeń robocza TaskTalk</NavDropdown.Item>
            <NavDropdown.Divider /> 
            {/* dorobic skrypt do zczytywania przestrzeni i dodawania ich do listy */}
            <NavDropdown.Item href="#action/3.1">Przestrzeń robocza TaskTalk</NavDropdown.Item> 
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1">Przestrzeń robocza TaskTalk</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button variant='primary' size='sm' className="btn-create">
        Utwórz
        </Button>
        <NotificationsActiveIcon/>
        <HelpOutlineIcon/>

      </Navbar.Collapse>
    </div>
  </Navbar>

  
  );
};

export default Header_tables;
