import React, { useState } from 'react';
import './App.css';

import { Container, Navbar, Nav, NavDropdown, Button, Modal, Form } from 'react-bootstrap'

function NavbarWeb() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

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
                    <Button variant="outline-primary" onClick={handleOpen}>Watch?</Button>
                </Nav>
            </Navbar>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add new weeb</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Attack on Weebs season 1"></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Waiting List
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Watch Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default NavbarWeb;
