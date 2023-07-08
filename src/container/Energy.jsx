import React from 'react';
import images from '../constants/images';
import { HeadingSec } from '../components';

const Energy = () => {
  return (
   <>
   <div className="container sections__padding" id='sire'>
    <div className="row ">
      <div className="col-md-5 circl-bg d-none d-lg-block ">
        <img className='energyDotImg1' src={images.dots} alt="" />
        <img className='sire-img1' src={images.sire01} alt="sire01" />
        <img className='sire-img2' src={images.sire02} alt="sire02" />
        <img className='energyDotImg2' src={images.dots} alt="" />
      </div>
      <div className="col-md-7 sireContent">
        <img className='d-none d-lg-block' src={images.dotCR} alt="" />
        <h3 className='sire-main-title'>S.I.R.E</h3>
        <h3 className='sire-title'>Smart Integrated Renewable Energy</h3>
        <p>S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per la produzione, conversione e gestione dell'energia solare, studiato specificatamente per installazioni all'interno di condomini.</p>
      </div>
    </div>
   </div>
    
   </>
  )
}

export default Energy
