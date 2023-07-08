import React from 'react';
import quoteLeft from '../assets/images/quote-left.png';
import quoteRight from '../assets/images/qoute-right.png';

const Testimonial = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='d-flex space-between align-items-start'>
              <img src={quoteLeft} alt="" />
              <p className='testimonial-para text-center'>Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una componente di una soluzione ingegneristica più completa che comprende sensoristiche avanzate e l'integrazione con i sistemi domotici di casa.</p>
              <img src={quoteRight} alt="" />
            </div>
          <h5 className='text-center' style={{color:"#86BE3F"}}>- Cristian Testoni -</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
