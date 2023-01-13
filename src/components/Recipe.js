import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router";
import RichText from "./RichText";

export default function Recipe({ recipes }) {
  const { recipe_id } = useParams();
  console.log(recipe_id);
  const recipe = recipes.find((val) => val.sys.id === recipe_id);
  console.log("recipe found: ", recipe);

  return (
    <div className="recipe">
      <Row>
        <Col className="padding">
          <Card style={{ width: "50rem" }}>
            <Card.Img
              style={{ aspectRatio: 1.5, objectFit: "cover" }}
              variant="top"
              src={recipe.fields.picture.fields.file.url}
            />
            <Card.Body>
              <Card.Title className="mb-4">{recipe.fields.title}</Card.Title>
               <Container>
                <Row>
                  <Col>
                    <h5>Ingredients</h5>
                    <RichText content={recipe.fields.ingredients} />
                  </Col>
                  <Col>
                    <h5>How it's done</h5>
                    <RichText content={recipe.fields.creationSteps} />
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
