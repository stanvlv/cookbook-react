import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const categories = ["Main", "Dessert", "Salad"];

  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {categories.map((cat, idx) => (
          <Col className="categories-cards">
            <Card className="text-center">
              <Card.Img variant="top" src="https://www.iberdrola.com/documents/20125/39904/real_food_746x419.jpg/0c9185fa-b2dd-e1a6-602c-bca55f68e54e?t=1626673209445" />
              <Card.Body>
                <Card.Title>{cat}</Card.Title>
                <NavLink to={`/category/${cat}`}>
                  <Button variant="dark">Show recipes</Button>
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
