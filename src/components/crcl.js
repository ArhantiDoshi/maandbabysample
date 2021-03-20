import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
//import {Carousel} from 'react-bootstrap';
import  '../App.css';
import * as ReactBootStrap from 'react-bootstrap';

// import 'font-awesome/css/font-awesome.css';
// import 'bootstrap-social/bootstrap-social.css';

class Carousel1 extends Component {
	
render(){
return(
 <React.Fragment>
<Container fluid>
<Row>
       
       
		<ReactBootStrap.Carousel>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/images/img1.png"
      alt="First slide"
    />
    <ReactBootStrap.Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/images/img2.png"
      alt="Second slide"
    />

    <ReactBootStrap.Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
  <ReactBootStrap.Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/images/img3.png"
      alt="Third slide"
    />

    <ReactBootStrap.Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </ReactBootStrap.Carousel.Caption>
  </ReactBootStrap.Carousel.Item>
</ReactBootStrap.Carousel>

</Row>
</Container>

	 </React.Fragment>	
	);
	}
	}
	
	export default Carousel1;