// import { motion } from "framer-motion";
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import banners from '../../../images/banner-img.png';
import './Banner.css';

const Banner = () => {
    return (
            <Container>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={4}>
                        <h1>Want Some Budgets Motor Bikes??</h1>
                        <p className="text-muted"><small>We are here to Show you your favourite Motor Bykes</small></p>
                        <button whileHover={{scale:1.1, textShadow:'0px 0px 8px rgb(255 255 255)', boxShadow:'0px 0px 8px #17a2b8', transition:{duration:0.4, yoyo:'Infinity'}}} className='main-button'>See Collections</button>
                    </Col>
                    <Col className="offset-md-1 img1" md={6}>
                        <Image className="img-fluid" src={banners} alt="..." />
                    </Col>
                </Row>
            </Container>
    );
};

export default Banner;