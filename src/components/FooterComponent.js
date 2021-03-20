import React from 'react';
import '../App.css';

import { Container, Row,Col} from 'reactstrap';
import * as ReactBootStrap from 'react-bootstrap';
import {FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";

function Footer(props) {
    return(
        <ReactBootStrap.Jumbotron fluid style={{backgroundColor:'pink'}}>
        <Container fluid>
    <Row>
    <Col xs={4} className="justify-content-left">
		    
                    <h5>Links</h5>
                    <ul className="list-unstyled fottercolor" >
                         <li >Home</li>
                        <li>About Us</li>
                        <li>Specialities</li>
						<li>HealthInformation</li>
						<li>Appointment</li>
                        <li>Contact Us</li>
                    </ul>
                </Col>
                <Col xs={4}>
                    <h5>Our Address</h5>
                 <p>Address</p>
                </Col>
                <Col xs={4}>
                <h5>Get Socially Connected with us</h5>
                    <FaFacebook size={28} className='mr-3' />
  <FaInstagram  size={28} className='mr-3' />
  <FaTwitterSquare size={28}className='mr-3' />
                               
                </Col>
           
            </Row>
            </Container>
            </ReactBootStrap.Jumbotron>
    );
}

export default Footer;