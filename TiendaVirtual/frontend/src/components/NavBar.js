import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    if (localStorage.getItem("data") != undefined) {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark sticky-top">
                    <Container>
                        <Navbar.Brand href="/">La tienda virtual</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/inicio">Inicio</Nav.Link>
                                <Nav.Link href="/categorias">Categorías</Nav.Link>
                                <Nav.Link href="/productos">Productos</Nav.Link>
                                <Nav.Link href="/entradas">Entradas</Nav.Link>
                                <Nav.Link href="/salidas">Salidas</Nav.Link>
                                <Nav.Link href="/movimientos">Movimientos</Nav.Link>
                                <Nav.Link href="/" onClick={() => { localStorage.removeItem("data") }}>Cerrar sesión</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    } else {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">La tienda virtual</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default NavBar