import React from 'react';
import { Container, Form, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import atgWorld from "./images/whole.png";


const NavbarSection = () => {
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand}>
                    <Container fluid>
                        <Navbar.Brand> <img src={atgWorld} alt="" /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >

                            <Offcanvas.Body>
                                <Form className="d-flex mx-auto">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search for your favorite groups in ATG"
                                        className="me-5"
                                        aria-label="Search"
                                    />
                                </Form>
                                <Nav className="justify-content-end flex-grow-1 pe-3">

                                    <NavDropdown
                                        title="Create Account"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item>Sign In</NavDropdown.Item>
                                        <NavDropdown.Item>
                                            Sign Up
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );;
};

export default NavbarSection;