import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";
import Cart from './Cart.js';
//import NavDropdown from 'react-bootstrap/NavDropdown';

const AppBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home" className="text-success"><span><i class="bi bi-cup-hot-fill"></i><h1>Coffee 2.0</h1></span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
        <Nav className="h6">
          <Nav.Link href="#home" className="fw-bold">Home</Nav.Link>
          <Nav.Link href="#menu" className="fw-bold">Menu</Nav.Link>
          <Nav.Link href="#about" className="fw-bold">About</Nav.Link>
          <Nav.Link href="#contact" className="fw-bold">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Cart />
    </Container>
  </Navbar>
  )
}

export default AppBar;