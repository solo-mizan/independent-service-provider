import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <Carousel className="mb-4">
      <Carousel.Item>
        <img className="d-block w-100" src="/l0.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3 className="text-black">
            I'll consult you when to take care of your skin
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/l1.jpg" alt="Second slide" />

        <Carousel.Caption>
          <h3 className="text-black">When to cut hair</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/l2.jpg" alt="Third slide" />

        <Carousel.Caption>
          <h3 className="text-black">And when to smoothen your skin</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
