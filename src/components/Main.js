import React, { useState } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./Categories";

export default function Main({ recipes }) {
  const [index, setIndex] = useState(0); // eslint-disable-line no-unused-vars
  console.log(recipes);

  // prettier-ignore
  const handleSelect = (selectedIndex, e) => { // eslint-disable-line no-unused-vars
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Container>
        <Row className="carousel">
          <Col>
            <Carousel variant="dark">
              {recipes.map((item) => {
                return (
                  <Carousel.Item>
                    <img
                      style={{aspectRatio: 2 , objectFit : "cover"}}
                      className="d-block w-100"
                      src={item.fields.picture.fields.file.url}
                      alt={item.fields.picture.fields.description}
                    />
                    
                    <Carousel.Caption className="caption">
                      <h5>{item.fields.title}</h5>

                      <NavLink to={`/recipe/${item.sys.id}`}>
                        <Button variant="dark">More</Button>
                      </NavLink>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
        <Row className="categories">
          <Categories />
        </Row>
      </Container>
    </div>
  );
}
