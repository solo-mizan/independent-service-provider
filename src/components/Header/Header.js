import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand className='text-primary' as={Link} to={'/home'}>Agricultural Consult Services</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/services'}>Services</Nav.Link>
                        <Nav.Link as={Link} to={'/reviews'}>Reviews</Nav.Link>
                        <Nav.Link as={Link} to={'/blogs'}>Blogs</Nav.Link>
                        <Nav.Link as={Link} to={'/about'}>About me</Nav.Link>
                        <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;