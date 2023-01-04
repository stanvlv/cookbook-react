import React from "react";
import { Card } from 'react-bootstrap';

export default function Main() {
  return (
    <div>
      <Card>
        <Card.Img
          class="img-fluid"
          src="https://picsum.photos/200/200"
          alt="example image"
        />
        <Card.Body>
          <Card.Title> Recipe 1 </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
