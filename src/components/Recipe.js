import React from 'react'
import {
  Row,
  Col,
  Card
} from 'react-bootstrap';

export default function Recipe() {
  return (
    <div>
      <Row>
      <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/250px250" />
              <Card.Body>
                <Card.Title>Recipe Title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
  )
}
