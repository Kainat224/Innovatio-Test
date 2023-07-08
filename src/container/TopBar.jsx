import React from 'react';
import images from '../constants/images';
import BtnNew from '../components/BtnNew';
import { PhoneEmail } from '../components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TopBar = () => {
  
  return (
  <> 
  <div className='container mt-3'>
    <div className='row'>
      <div className='col-md-4 col-sm-6 d-flex justify-content-lg-start justify-content-md-center align-items-center'>
        <img src={images.logo}/>
      </div>
      <div className='col-md-8 col-sm-6 d-none d-lg-block'>
        <div className='d-flex justify-content-end align-items-center gap-4 topBarText pe-text-hidden'>
          <PhoneEmail  imgUrl={images.phone} title="0203 519 4420" />
          <PhoneEmail imgUrl={images.mail} title="info@solarinnovatio.com"/>
          <BtnNew title="Contact Us"/>  
        </div>
      </div>

      <div className='col-sm-6 d-none d-md-block d-sm-block d-xsm-block'>
        <div className='d-flex justify-content-end align-items-center gap-4 topBarText pe-text-hidden'>
          
      <Navbar expand="lg" className='d-lg-none d-md-block d-sm-block'>
          <Navbar.Toggle aria-controls="navbarScroll w-100" />
        
            <Navbar.Collapse id="navbarScroll w-100">
              <Nav
                className="mb-2 my-lg-0 w-100"
                
                navbarScroll 
              >
                <Nav className="d-flex justify-content-between w-100">
                    <Nav.Link href="#home" className='navBarLinks'>Home</Nav.Link>
                    <Nav.Link href="#chiSiamo" className='navBarLinks'>Chi Siamo</Nav.Link>
                    <Nav.Link href="#sire" className='navBarLinks'>S.I.R.E</Nav.Link>
                    <Nav.Link href="#sireFeatures" className='navBarLinks'>SIRE Features</Nav.Link>
                    <Nav.Link href="#whySire" className='navBarLinks'>Why SIRE?</Nav.Link>
                    <Nav.Link href="#sireProduct" className='navBarLinks'>SIRE Product</Nav.Link>
                    <Nav.Link href="#how" className='navBarLinks'>How it Works?</Nav.Link>
                  </Nav>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>


    </div>
  </div>
  <hr/>
  </>
  )
}

export default TopBar
