import React from "react";
import { Row, Col, Card } from "react-bootstrap";
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
          <Card style={{ width: '50rem' }}>
            <Card.Img
            style={{aspectRatio: 1.5 , objectFit : "cover"}}
              variant="top"
              src={recipe.fields.picture.fields.file.url}
            />
            <Card.Body>
              <Card.Title>{recipe.fields.title}</Card.Title>
              <Card.Text>
                <h6>Ingredients</h6>
                <RichText content={recipe.fields.ingredients} />
                <h6>Creation steps</h6>
                <RichText content={recipe.fields.creationSteps} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
