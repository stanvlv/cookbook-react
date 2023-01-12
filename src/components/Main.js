import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./Categories";

export default function Main({ recipes }) {
  // prettier-ignore

  return (
    <div>
      <Container>
        <Row className="carousel justify-content-center">
          <Col xs={10}>
            <Carousel fade variant="dark">
              {recipes.map((item) => {
                return (
                  <Carousel.Item>
                    <img
                      style={{aspectRatio: 2 , objectFit : "cover", borderRadius: 5}}
                      className="d-block w-100"
                      src={item.fields.picture.fields.file.url}
                      alt={item.fields.picture.fields.description}
                    />                    
                    <Carousel.Caption className="caption">
                      <h5 style={{fontWeight: "bold"}}>{item.fields.title}</h5>
                      <NavLink to={`/recipe/${item.sys.id}`}>
                        <Button variant="dark">See recipe</Button>
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
