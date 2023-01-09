import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import soup from "./img/soup.png";

export default function Header() {
  const categories = ["Main", "Dessert", "Salad"];

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={soup} style={{ height: 50 }} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home Page</Nav.Link>

              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                {categories.map((cat, idx) => (
                  <NavDropdown.Item href={`/category/${cat}`}>
                    {cat}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
