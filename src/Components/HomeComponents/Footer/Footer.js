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


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// const Footer = () => {
//     return (
//         <div>
//             <footer className="footer-distributed">

//                 <div className="footer-left">

//                     <h3>Commonal <span>Hospital</span></h3>

//                     <p className="footer-links">
//                         <Link to="/home">Home</Link>
//                         <Link to="/services">Services</Link>
//                         <Link to="/equipment">Equipments</Link>
//                         <Link to="/about">About</Link>
//                     </p>
//                     <p className="footer-company-name">Commonal Hospital © 2015</p>
//                 </div>
//                 <div className="footer-center">
//                     <div >
//                         <FontAwesomeIcon className="icon" icon={faMapMarked} size='2x' />
//                         <p className="d-inline-block"><span>1200 4 Banani</span> Dhaka, Bangladesh</p>
//                     </div>
//                     <div >
//                         <FontAwesomeIcon className="icon" icon={faPhone} size='2x' />
//                         <p>+012345678</p>
//                     </div>
//                     <div >
//                         <FontAwesomeIcon className="icon" icon={faEnvelope} size='2x' />
//                         <p><a href="mailto:support@company.com">redowanrafy707@gmail.com</a></p>
//                     </div>
//                 </div>
//                 <div className="footer-right">
//                     <p className="footer-company-about">
//                         <span>About Us</span>
//                         Over several months this past spring, national correspondent Beth Hawkins tracked the groundbreaking integration efforts of the 78207, the zip code located on the Dhaka FarmGate.
//                     </p>
//                     <div className="footer-icons">
//                         <FontAwesomeIcon className="icon" icon={faFacebook} size='3x' />
//                         <FontAwesomeIcon className="icon" icon={faInstagram} size='3x' />
//                         <FontAwesomeIcon className="icon" icon={faLinkedinIn} size='3x' />
//                     </div> 
//                 </div>
//             </footer>
//         </div>
//     );
// };

// export default Footer;