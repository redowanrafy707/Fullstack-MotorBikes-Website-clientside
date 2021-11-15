
import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    const { setSelectedService } = useContext(UserContext);
    const { name, imgUrl, descriptionFast, price } = service;
    
    return (

         <Col lg={4} md={6} className="mt-5">
                <Card className="border-0 p-3 container card-container ">
                        <img className='img-fluid' src={imgUrl} alt={name} />
                            <Card.Body>
                                <Card.Title as="h5" className="text-info">{name}</Card.Title>
                                <Card.Text as='p' className="text-muted">{descriptionFast}</Card.Text>
                            </Card.Body>  
                            <Card.Footer className='d-flex justify-content-between align-items-center border-0'>
                                <h5>{price}</h5>
                                <Button  variant='dark'  as={Link} to="/dashboard/book" onClick={() => setSelectedService(service)} className="main-button">Buy Now</Button>            
                            </Card.Footer>
                    </Card>
        </Col>
    );
};

export default ServiceDetail;