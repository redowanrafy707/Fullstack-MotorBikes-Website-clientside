

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Moto <span>Hub</span></h3>

                    <p className="footer-links">
                        <Link to="/home">Home</Link>
                        <Link to="/services">About</Link>
                        <Link to="/equipment">All Services</Link>
                        <Link to="/about">Dashboard</Link>
                        <Link to="/about">Pay</Link>
                        <Link to="/about">Contact</Link>
                    </p>
                    <p className="footer-company-name"> Moto Hub © 2021</p>
                </div>
                <div className="footer-center">
                    <div >
                        <FontAwesomeIcon className="icon" icon={faMapMarked} size='2x' />
                        <p className="d-inline-block"><span>1200 4 Banani</span> Dhaka, Bangladesh</p>
                    </div>
                    <div >
                        <FontAwesomeIcon className="icon" icon={faPhone} size='2x' />
                        <p>+012345678</p>
                    </div>
                    <div >
                        <FontAwesomeIcon className="icon" icon={faEnvelope} size='2x' />
                        <p><a href="mailto:support@company.com">redowanrafy707@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About Us</span>
                        Over several months this past spring, national correspondent Beth Hawkins tracked the groundbreaking integration efforts of the 78207, the zip code located on the Dhaka FarmGate.
                    </p>
                    <div className="footer-icons">
                        <FontAwesomeIcon className="icon" icon={faFacebook} size='3x' />
                        <FontAwesomeIcon className="icon" icon={faInstagram} size='3x' />
                        <FontAwesomeIcon className="icon" icon={faLinkedinIn} size='3x' />
                    </div> 
                </div>
            </footer>
        </div>
    );
};

export default Footer;