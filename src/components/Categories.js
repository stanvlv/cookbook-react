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
              <NavLink to={`/category/${cat}`} className="text">
                <Card.Img
                  variant="top"
                  src="https://www.iberdrola.com/documents/20125/39904/real_food_746x419.jpg/0c9185fa-b2dd-e1a6-602c-bca55f68e54e?t=1626673209445"
                />
                <Card.Body>
                  <Card.Title className="text">{cat}</Card.Title>
                  <Button variant="dark">Show recipes</Button>
                </Card.Body>
              </NavLink>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
