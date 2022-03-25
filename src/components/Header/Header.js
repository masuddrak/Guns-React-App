import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
const Header = () => {
    return (
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className='fw-bold fs-2 text-light' href="#home">GunS</Navbar.Brand>
          <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='text-center'  id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className='text-light fs-4' href="#home">Home</Nav.Link>
              <Nav.Link className='text-light fs-4' href="#link">Guns</Nav.Link>
              <Nav.Link className='text-light fs-4' href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;