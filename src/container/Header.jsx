import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BtnNew from '../components/BtnNew';

const Header = () => {
  return (
  <>
    <div className='container d-lg-block d-md-none d-sm-none headerForSmallScreen' >
      <div className='row'>
        <div className='col-md-12'>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="navbarScroll w-100" />
        
            <Navbar.Collapse id="navbarScroll w-100">
              <Nav
                className="mb-2 my-lg-0 w-100"
                style={{ maxHeight: '100px' }}
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
  </>
  )
}

export default Header
