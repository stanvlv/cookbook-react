import React from "react";
import { Card } from 'react-bootstrap';

export default function Main() {
  return (
    <div>
      <Card>
        <Card.Img
          class="img-fluid"
          src="https://picsum.photos/900/500"
          alt="example image"
        />
        <Card.Body>
          <Card.Title> Example text</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
