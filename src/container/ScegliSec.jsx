import React from 'react';
import HeadingSec from '../components/HeadingSec';
import images from '../constants/images';
import Card from 'react-bootstrap/Card';
import { BtnNew, PhoneEmail } from '../components';
import Accordion from 'react-bootstrap/Accordion';

const ScegliSec = () => {
  return (
    <>
    <div className='container sections__padding'>
      <div className="row">
        <div className='col-md-12'>
          <HeadingSec title={'Scegli il tuo SIRE'}/>
        </div>
        <div className='col-md-6 mt-5' >
        <Card>
          <Card.Img variant="top" src={images.seg01} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              <PhoneEmail imgUrl={images.arrow} title={'Sistema Plugin'}/>
              <PhoneEmail imgUrl={images.arrow} title={'Struttura meccanizzata in poliuera e sensoristica intelligente'}/>
              <PhoneEmail imgUrl={images.arrow} title={'Pannelli alta efficienza da 1KW'}/>
              <PhoneEmail imgUrl={images.arrow} title={'Sistema Plugin'}/>
              <PhoneEmail imgUrl={images.arrow} title={'Pannelli alta efficienza da 1KW'}/>
            </Card.Text>
            <h5>CONSIGLIATO PER:</h5>
            <div className='d-flex'>
              <div className='secg-margin'>
                <img src={images.secgicon01} alt="" />
                <p>Devices</p>
              </div>
              <div>
                <img src={images.secgicon02} alt="" />
                <p>Families</p>
              </div>
            </div>
            <Accordion defaultActiveKey="0" className="custom-accordion" >
              <Accordion.Item eventKey="0" className='py-2 border-0'>
                <Accordion.Header>
                  <h6>Scopri le caratteristiche tecniche</h6>
                </Accordion.Header>
                <Accordion.Body>
                 <ul className='scegliUlStyle p-2'>
                  <li>Te mpo di ricarica medio in estate</li>
                  <li>TBD Tempo di scarica a 16A.</li>
                  <li>2gg Immissione di CO2 da 1.022 kg a SOO kg annui</li>
                  <li>Te mpo di ricarica medio in estate</li>
                 </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
        </div>

        <div className='col-md-6 mt-5'>
        <Card>
          <Card.Img variant="top" src={images.seg02} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              <PhoneEmail imgUrl={images.arrow} title={'Sistema Plugin'}/>
              <PhoneEmail imgUrl={images.arrow} title={'Struttura meccanizzata in poliuera e sensoristica intelligente'}/>
              <PhoneEmail imgUrl={images.arrow} title={'Pannelli alta efficienza da 1KW'}/>
              <PhoneEmail imgUrl={images.arrow} title={'Sistema Plugin'}/>
              <PhoneEmail imgUrl={images.arrow} title={'Pannelli alta efficienza da 1KW'}/>
            </Card.Text>
            <h5>CONSIGLIATO PER:</h5>
            <div className='d-flex'>
              <div className='secg-margin'>
                <img src={images.secgicon01} alt="" />
                <p>Devices</p>
              </div>
              <div>
                <img src={images.secgicon02} alt="" />
                <p>Families</p>
              </div>
            </div>
            <Accordion defaultActiveKey="0" className="custom-accordion" >
              <Accordion.Item eventKey="0" className='py-2 border-0'>
                <Accordion.Header>
                  <h6>Scopri le caratteristiche tecniche</h6>
                </Accordion.Header>
                <Accordion.Body>
                 <ul className='scegliUlStyle p-2'>
                  <li>Te mpo di ricarica medio in estate</li>
                  <li>TBD Tempo di scarica a 16A.</li>
                  <li>2gg Immissione di CO2 da 1.022 kg a SOO kg annui</li>
                  <li>Te mpo di ricarica medio in estate</li>
                 </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
    </>
  )
}

export default ScegliSec
