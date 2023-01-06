import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import soup from "./img/soup.png";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div>
      <Card className="text-center bg-dark text-white">
        <Card.Header></Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col id="footerLogo">
                <img src={soup} style={{ height: 100 }} alt="" />
              </Col>
              <Col>
                <h5>Presented to you by group 5:</h5>
                <span>
                  <ul>
                    <li>Aleksandra</li>
                    <li>Pavel</li>
                    <li>Stanislav</li>
                    <li>Agata</li>
                  </ul>
                </span>
              </Col>
              <Col>
                <h5>Contact:</h5>
                <span>Discord channel 😉</span>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col className="text-center">
                <SocialIcon
                  network="facebook"
                  bgColor="#ffffff"
                  fgColor="#000000"
                  style={{
                    height: 25,
                    width: 25,
                    margin: 4,
                  }}
                />
                <SocialIcon
                  network="instagram"
                  bgColor="#ffffff"
                  fgColor="#000000"
                  style={{
                    height: 25,
                    width: 25,
                    margin: 4,
                  }}
                />
                <SocialIcon
                  network="discord"
                  bgColor="#ffffff"
                  fgColor="#000000"
                  style={{
                    height: 25,
                    width: 25,
                    margin: 4,
                  }}
                />
              </Col>
            </Row>
          </Container>
          <Card.Text className="sm">🤍</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </div>
  );
}
