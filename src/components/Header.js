import React,{useState, useEffect} from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import data from "../Data";


export default function Header({recipes}) {

    const [searchInput, setSearchInput] = useState('')
    const [recipeTitle, setRecipeTitle] = useState([])
    const navigate = useNavigate()
   // console.log(recipes)
   
   console.log()
   const onSubmit = (e) => {
    e.preventDefault()
    recipes.map((recipe) => {
      if(searchInput === recipe.fields.title.toLowerCase()) {
        return navigate(`/recipe/${recipe.sys.id}`)
      } else { return console.log('no food for you')}
      
     })
   
  }
    
   // console.log(searchInput)
   
    
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={onSubmit}>
              <Form.Control
                onChange={e => setSearchInput(e.target.value)}
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
