import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row } from 'react-bootstrap';
import logo from "../Assests/image/logo.png"
const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary nav-outer">
      <Container>
     
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="header-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="header-nav">
            <Nav.Link href="#home">Resume</Nav.Link>
            <Nav.Link href="#link">Project</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </>
  )
}
  
export default Header