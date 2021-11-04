import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarComp(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Mengkeren</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" active>Home</Nav.Link>
          <Nav.Link href="/inventory">Inventory</Nav.Link>
          <Nav.Link href="/anggota">Anggota</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
