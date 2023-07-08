import React from 'react';
import { BtnNew, HeadingSec } from '../components';
import Accordion from 'react-bootstrap/Accordion';


const Faq = () => {
  return (
    <>
    <div className='container' style={{marginTop:'60px'}} id='how'>
      <div className='row'>
        <div className='col-12'>
          <HeadingSec title={'Frequently Asked Questions'}/>
        </div>
      </div>

      <div className="row ">
        <div className="col-12 my-5">
          <Accordion defaultActiveKey="0"  className="custom-accordion" >
            <Accordion.Item eventKey="0" className='py-2'>
              <Accordion.Header>
                Dove si monta S.I.R.E.?
              </Accordion.Header>
              <Accordion.Body>
                S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Chi monta l’impianto S.I.R.E.?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Dove si monta S.I.R.E.?</Accordion.Header>
              <Accordion.Body>
                S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Chi monta l’impianto S.I.R.E.?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
            <Accordion.Header>Chi monta l’impianto S.I.R.E.?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. 
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </div>
      </div>

      <div className='row '>
        <div className="col-12 d-flex justify-content-center align-items-center ">
          <BtnNew title={'Collegati al sole'} />
        </div>
      </div>
    </div>

    
    </>
  )
}

export default Faq
