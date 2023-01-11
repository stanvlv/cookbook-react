import React, { useState } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./Categories";
import '../App.css';

export default function Main({ recipes }) {
  const [index, setIndex] = useState(0); // eslint-disable-line no-unused-vars
  console.log(recipes);

  // prettier-ignore
  const handleSelect = (selectedIndex, e) => { // eslint-disable-line no-unused-vars
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <Container>
        <Row className="carousel">
          <Col>
            <Carousel variant="dark">
              {
                recipes.map((item => {
                  return <Carousel.Item>
                    <img 
                      height={400}
                      width={400}
                                   
                      className="d-block w-100"
                      src={item.fields.picture.fields.file.url}
                      alt={item.fields.picture.fields.description}
                    />
                    <Carousel.Caption className="caption">
                      <h3 >{item.fields.title}</h3>
                      <NavLink to={`/recipe/${item.sys.id}`}>
                        <Button  variant="dark" bsSize="large">More</Button>
                      </NavLink>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Categories />
        </Row>
      </Container>
    </div>
  );
}
