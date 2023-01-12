import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
export default function Recipes({ recipes }) {
  const { category_name } = useParams();

  return (
    <Container>
      <Row xs={1} md={3}>
        {recipes
          .filter((val) => val.fields.category === category_name)
          .map((val, idx) => (
            <Col className="recipes">
              <NavLink
                to={`/recipe/${val.sys.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card>
                  <Card.Img
                    style={{ aspectRatio: 1.5, objectFit: "cover" }}
                    variant="top"
                    src={val.fields.picture.fields.file.url}
                  />
                  <Card.Body>
                    <Card.Title>{val.fields.title}</Card.Title>
                    <Card.Text>
                      <Button variant="dark">Show recipe</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </NavLink>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
