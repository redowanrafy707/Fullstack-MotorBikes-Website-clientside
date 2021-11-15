// import { motion } from "framer-motion";
import React from 'react';
import { Col, Container, Image, Row , Carousel} from 'react-bootstrap';

import './Banner.css';

const Banner = () => {
    return (

        <Carousel>
  <Carousel.Item>
    <img
                    className="d-block w-100 img"
                    src="https://i.pinimg.com/564x/6e/14/c4/6e14c40df0eb2a53db58da31e4e76dc6.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
                    className="d-block w-100 img"
                    src="https://i.pinimg.com/564x/1f/e1/0c/1fe10ce79b76188fc03a3b9b9917143a.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img"
                    src="https://i.pinimg.com/564x/a7/fa/a6/a7faa6aaf299fbad0baca329ea8858f2.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>

    );
};

export default Banner;






