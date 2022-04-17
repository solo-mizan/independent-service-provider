import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky='top'>
            <Container>
                <Navbar.Brand className='text-primary' as={Link} to={'/home'}>Agricultural Consult Services</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link eventKey="1" as={Link} to={'/home'}>Home</Nav.Link>
                        <Nav.Link eventKey="2" as={Link} to={'/services'}>Services</Nav.Link>
                        <Nav.Link eventKey="3" as={Link} to={'/reviews'}>Reviews</Nav.Link>
                        <Nav.Link eventKey="4" as={Link} to={'/blogs'}>Blogs</Nav.Link>
                        <Nav.Link eventKey="5" as={Link} to={'/about'}>About me</Nav.Link>
                        <Nav.Link eventKey="6" as={Link} to={'/login'}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;