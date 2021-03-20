import React, { Component } from 'react';
import { Container, Row,Col} from 'reactstrap';
 import * as ReactBootStrap from 'react-bootstrap';

// import {FaShippingFast, FaShoppingCart, FaUserAlt } from "react-icons/fa";




class ProductCard extends Component {


    render() {
        return(
		  <React.Fragment>
		
        <Container>
 <Row style={{color:'#ff007f'}}>
 <Col xs lg="2">
     <p>====================</p>
     </Col>
     <Col xs lg="2">
     <p >Our Range Of Products</p>
     </Col>
     <Col xs lg="2">
     <p>================</p>
     </Col>
 </Row>
  <Row>
    <Col><ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="assets/images/feeding.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Make Feeding Easy</ReactBootStrap.Card.Title>
    
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>
</Col>
    <Col>
    <ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="assets/images/Nursery.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Nursing Products</ReactBootStrap.Card.Title>
    
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card></Col>
    <Col>
    <ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="assets/images/Bathing.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Bathing Products</ReactBootStrap.Card.Title>
    
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card></Col>
  </Row>
  <Row>
    <Col><ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="assets/images/Health.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>HealthCare</ReactBootStrap.Card.Title>
    
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>
</Col>
    <Col>
    <ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="assets/images/Moisture.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Moisture</ReactBootStrap.Card.Title>
    
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card></Col>
    <Col>
    <ReactBootStrap.Card style={{ width: '18rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="assets/images/Gift.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Gift Store</ReactBootStrap.Card.Title>
    
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card></Col>
  </Row>
</Container>

			  </React.Fragment>
        );
    }
}

export default ProductCard;