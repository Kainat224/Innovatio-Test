import React from 'react';
import { HeadingSec } from '../components';
import PercheCard from '../components/PercheCard';
import images from '../constants/images';
 
const Connettiti = () => {
  return (
    <>
      <div className='container-fluid  percheMiniCards sections__padding' id='sireProduct'>
        <div className='row container mx-auto '>
          <div className='col-12 pb-5'>
            <HeadingSec title={'Connettiti al sole anche tu'}/>
          </div>

            <div className='row '>
              <div className='col-md-3 mb-3 '>
                <PercheCard imgUrl={images.conne01} title={'Risparmio Energetico'} desc={`Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze
                ditilizzn`}/>
              </div>

              <div className='col-md-3 mb-3'>
                <PercheCard imgUrl={images.conne02} title={'Risparmio Energetico'} desc={`Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze
                ditilizzn`}/>
              </div>

              <div className='col-md-3 mb-3'>
                <PercheCard imgUrl={images.conne03} title={'Risparmio Energetico'} desc={`Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze
                ditilizzn`}/>
              </div>

              <div className='col-md-3 mb-3'>
                <PercheCard imgUrl={images.conne04} title={'Risparmio Energetico'} desc={`Senza impegno un nostro Solar expert ti contatterâ per verificare Ie tue esirenze
                ditilizzn`}/>
              </div>
          
         </div>
        </div>
      </div>
    </>
  )
}

export default Connettiti
