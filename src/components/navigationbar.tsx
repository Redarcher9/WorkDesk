import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

function NavigationBar():JSX.Element {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{fontSize:"25px"}}>WorkDesk</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="/todos/">Todos</Nav.Link>
                    <Nav.Link href="/notes/">Notes</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;