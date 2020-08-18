import React from 'react';
import './App.css';

import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'

function NavbarWeb() {
    return (
        <Container fluid className="p-0">
            <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Weebs List</Navbar.Brand>
                <Nav className="ml-auto">
                    <NavDropdown title="Wibusian" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Change Password</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Remove Account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="ml-3">
                    <Button variant="outline-primary">Watch?</Button>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default NavbarWeb;
