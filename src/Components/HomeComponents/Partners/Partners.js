import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import airbnb from '../../../images/airbnb.png';
import google from '../../../images/google.png';
import netflix from '../../../images/netflix.png';
import slack from '../../../images/slack.png';
import uber from '../../../images/uber.png';
import  "./Partner.css"

const Partners = () => {
    return (
        <section>
        <Container className='my-5'>
                <div className="div1"><h1>Our Brands</h1> </div>
            <Row xs={12} className='justify-content-around align-items-center div2'>
                <Col className='text-center mt-4' xs={6} md={2}><img style={{width:'100px'}} src={slack} alt=""/></Col>
                <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={google} alt=""/></Col>
                <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={uber} alt=""/></Col>
                <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={netflix} alt=""/></Col>
                <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={airbnb} alt=""/></Col>
            </Row>
        </Container>
    </section>
    );
};

export default Partners;