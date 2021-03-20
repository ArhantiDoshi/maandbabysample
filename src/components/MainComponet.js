import React, { Component } from 'react';
//import logo from './logo.svg';
import ProductCard from'./ProductCard';
import Footer from './FooterComponent';
import Navigtn from './Navigation';
import Carousel1 from './crcl';


//import { Switch, Route,Redirect } from 'react-router-dom';
//import Specialities from './specialitiescomponent';






class Main extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			
		};
	}
	render(){
		
  return (	   
          <div>
         <Navigtn />
		   <Carousel1 />
		   <ProductCard />
		  <Footer />
		
    </div>
  );
}
}
export default Main;
