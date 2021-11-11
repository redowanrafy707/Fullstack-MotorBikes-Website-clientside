import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {

    return (
        <footer className="footer-container">
            <Container>
                <Row>
                        <Col md={6} lg={4} className="mt-2">
                           <div className="footer-link">
                                <h3 style={{color:'#404655'}}> Latest Bikes</h3>
                                {/* <span className="animate-border border-black mb-3"></span> */}
                                <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Racing Bikes</span></Link>
                                <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Scooters</span></Link>
                                <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon icon={faCheckCircle} /> <span> Second Hand Bikes</span></Link>
                                <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Want to Sell??</span></Link>
                                {/* <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Test driving and speed test</span></Link> */}
                           </div>
                        </Col>
                        <Col  md={6} lg={4} className="mt-2">     
                            <div>
                                <h3 style={{color:'#404655'}}>New Collection</h3>
                                {/* <span className="animate-border border-black mb-3"></span> */}
                                    <div className="footer-link">
                                        <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon icon={faCheckCircle} /> <span> How to get started?</span></Link>
                                        <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon icon={faCheckCircle} /> <span> Frequently asked questions</span></Link>
                                        <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Customer testimonials</span></Link>
                                        <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Review Us</span></Link>
                                        <Link to='/' className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> Help & Support Center</span></Link>
                                    </div>
                             </div>   
                        </Col>
                        <Col  md={6} lg={4} className="mt-2">     
                            <div>
                                <h3 style={{color:'#404655'}}>Social Links</h3>
                                {/* <span className="animate-border border-black mb-3"></span> */}
                                    <div className="footer-link">
                                        {/* <a href='' target="-blank" className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon icon={faCheckCircle} /> <span>Facebook</span></a> */}
                                <a href='https://www.linkedin.com/in/redowan-rafy-0534b51b5/' target="-blank" className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon icon={faCheckCircle} /> <span> LinkedIn</span></a>
                                <a href='https://github.com/redowanrafy707' target="-blank" className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span> GitHub</span></a>
                                <a href='https://www.instagram.com/redowanrafy/' target="-blank" className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span>Instagram</span></a>
                                <a href='https://twitter.com/RafyRedowan' target="-blank" className='d-block p-0 mb-4 item-link nav-link'><FontAwesomeIcon  icon={faCheckCircle} /> <span>Twitter</span></a>
                                    </div>
                             </div>   
                        </Col>
                </Row>
          </Container>   
        </footer>
    );
};

export default Footer;