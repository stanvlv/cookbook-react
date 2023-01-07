import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Categories() {
  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src="https://picsum.photos/60/20" />
              <Card.Body>
                <Card.Title>Category Title</Card.Title>
                <Button variant="dark">More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
