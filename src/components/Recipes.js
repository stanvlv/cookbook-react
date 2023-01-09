import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";

export default function Recipes({ recipes }) {

  const { category_name } = useParams();

  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {recipes
        .filter((val) => val.fields.category === category_name)
        .map((val, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={val.fields.picture.fields.file.url} />
              <Card.Body>
                <Card.Title>{val.fields.title}</Card.Title>
                <Card.Text>
                  Lorem ipsum
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
