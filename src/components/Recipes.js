import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
export default function Recipes({ recipes }) {

  const { category_name } = useParams();

  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {recipes
        .filter((val) => val.fields.category === category_name)
        .map((val, idx) => (
          <Col className="recipes">
            <NavLink to={`/recipe/${val.sys.id}`} style={{textDecoration: 'none', color: "inherit"}}>
            <Card>
              <Card.Img variant="top" src={val.fields.picture.fields.file.url} />
              <Card.Body>
                <Card.Title>{val.fields.title}</Card.Title>
                <Card.Text>
                  Lorem ipsum
                </Card.Text>
              </Card.Body>
            </Card>
            </NavLink>
          </Col>
        ))}
      </Row>
    </div>
  );
}
