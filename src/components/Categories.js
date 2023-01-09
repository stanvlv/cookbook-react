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
          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src="https://picsum.photos/60/20" />
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
