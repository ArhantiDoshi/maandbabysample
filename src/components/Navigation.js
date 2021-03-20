import React, { Component } from 'react';
import { Container, Row,Col} from 'reactstrap';
import * as ReactBootStrap from 'react-bootstrap';






class Navigtn extends Component {


    render() {
        return(
		  <React.Fragment>
		<Container fluid>
    <Row >
    <Col>
      <ReactBootStrap.Image src="assets/images/MNB.png" rounded />
    </Col>
    <Col>
    <ReactBootStrap.Form inline className="mt-4">
      <ReactBootStrap.FormControl type="text" placeholder="Search Product By Name" className="mr-sm-3" />
      <ReactBootStrap.Button style={{color:"#ff007f", backgroundColor:"#ffffff", border:"#ff007f, 2px",paddingRight:'2px'}}>Search</ReactBootStrap.Button>
    </ReactBootStrap.Form>
    </Col>
    <Col className='mt-4' id="fonticon">
    <ReactBootStrap.Image src="assets/images/cart.png" className='mr-3'  />
    <ReactBootStrap.Image src="assets/images/shipping.png" className='mr-3' />
    <ReactBootStrap.Image src="assets/images/Login.png" className='mr-3' />
  
    </Col>
    </Row>
<Row>
      
      
    <ReactBootStrap.Navbar  style={{backgroundColor: '#ff007f',width:"100%"}} expand="lg">
  
  <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto offset-1 mr-3"  >

    <ReactBootStrap.NavDropdown  title="About Us" className="mr-3" id="navitem">
      
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" id="navdrpdwnitem">Our Range of Products</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
         </ReactBootStrap.NavDropdown>
         <ReactBootStrap.Nav.Link href="#home" id="navitem">Feeding and Nursing</ReactBootStrap.Nav.Link>
         <ReactBootStrap.NavDropdown title="Pregnancy & Mom" id="navitem" className="mr-3">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" id="navdrpdwnitem">All Pregnancy and Mom Products</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" id="navdrpdwnitem">Shop by Trimister</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" id="navdrpdwnitem">Shop by Concerns</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
         </ReactBootStrap.NavDropdown>
         <ReactBootStrap.Nav.Link href="#home" id="navitem">Bath and SkinCare</ReactBootStrap.Nav.Link>
         <ReactBootStrap.NavDropdown title="BabyCare" id="navitem" className="mr-3">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" id="navdrpdwnitem">All BabyCare Products</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" id="navdrpdwnitem">Shop by Age</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" id="navdrpdwnitem">Shop by Concerns</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
         </ReactBootStrap.NavDropdown>
         <ReactBootStrap.Nav.Link href="#home" id="navitem">Toys and Gaming</ReactBootStrap.Nav.Link>
         <ReactBootStrap.NavDropdown title="Bodycre" id="navitem" className="mr-3">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" id="navdrpdwnitem">All BabyCare Products</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.1"id="navdrpdwnitem">Shop by Age</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" id="navdrpdwnitem">Shop by Concerns</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
         </ReactBootStrap.NavDropdown>
       
         <ReactBootStrap.NavDropdown title="HairCare" id="navitem" className="mr-3">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1" id="navdrpdwnitem">All Haircare Products</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
         </ReactBootStrap.NavDropdown>
         <ReactBootStrap.Nav.Link href="#home" id="navitem">Mom And Maternity</ReactBootStrap.Nav.Link>
</ReactBootStrap.Nav>
 </ReactBootStrap.Navbar.Collapse>
 
  </ReactBootStrap.Navbar>
  
 </Row>
 </Container>
  
  

			  </React.Fragment>
        );
    }
}

export default Navigtn;