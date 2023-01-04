import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";


export default function Header() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src=""
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  ZZZ Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </p>
              </Carousel.Caption>
              <Button>More</Button>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unsplash.com/photos/yb6bm_66Jdk"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>
                  XXX Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
              </Carousel.Caption>
              <Button>More</Button>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </Carousel.Caption>
              <Button>More</Button>
            </Carousel.Item>
            <Button>More</Button>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
