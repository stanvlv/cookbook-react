import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { IconName } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
      <Container>
      <Row>
        <Col>Logo</Col>
        <Col>Address</Col>
        <Col>Contact field</Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-center">
          Ikons
        </Col>
      </Row>
    </Container>
        <Card.Text>
          text below.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
      
    </div>
  )
}
