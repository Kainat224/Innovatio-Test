import React from 'react';
import images from '../constants/images';
const Herosec = () => {
  return (
    <div className='container-fluid p-0' id="home">
      <div className='row g-0'>
        <div className='col-md-12 position-relative '>
          <img src={images.heroimg} className='img-fluid' alt="" />
          <div className='text-center position-absolute hero-caption m-auto'>
            <h1 id='hero-heading'>Il tuo accesso al sole</h1>
            <p id='hero-para'>Sistemi fotovoltaici intelligenti ad uso residenziale, anche in assenza di tetto. La tua fonte d'energia, gratuita e sostenibile</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herosec
