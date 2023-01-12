import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header({ recipes }) {
  const categories = ["Main", "Dessert", "Salad"];

  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goForward = () => {
    navigate(+1);
  };
  // console.log(recipes)

  console.log();
  const onSubmit = (e) => {
    e.preventDefault();
    recipes.map((recipe) => {
      if (searchInput === recipe.fields.title.toLowerCase()) {
        return navigate(`/recipe/${recipe.sys.id}`);
      }
      if (searchInput === recipe.fields.category.toLowerCase()) {
        return navigate(`./category/${recipe.fields.category}`);
      } else {
        return console.log("no food for you");
      }
    });
  };

  // console.log(searchInput)

  return (
    <div className="sticky-top">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            <Button
              variant="outline-light"
              onClick={goBack}
              className="navButtons"
            >
              {"<"}
            </Button>
            <Button
              variant="outline-light"
              onClick={goForward}
              className="navButtons"
            >
              {">"}
            </Button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home Page
                </NavLink>
              </Nav.Link>

              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                {categories.map((cat, idx) => (
                  <NavLink to={`/category/${cat}`} className="catLinks">
                    {cat}
                  </NavLink>
                ))}
              </NavDropdown>
            </Nav>
            <Form className="d-flex" onSubmit={onSubmit}>
              <Form.Control
                onChange={(e) => setSearchInput(e.target.value)}
                type="search"
                placeholder="Search for recipe"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light" onClick={onSubmit}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
