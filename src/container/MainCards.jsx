import React from 'react'
import { HeadingSec } from '../components';
import CardSec from '../components/CardSec';
import images from '../constants/images';

const MainCards = () => {
  return (
    <>
      <div className='container sections__padding' id='chiSiamo'>
        <div className='row py-4'>
          <div className='col-12'>
            <HeadingSec title={'Chi Siamo'}/>
            <p className='text-center'>Solar Innovatio è una PMI innovativa italiana specializzata nella progettazione e realizzazione di sistemi fotovoltaici intelligenti. Solar Innovatio unisce alla decennale esperienza maturata nel panorama italiano nell'ambito delle soluzioni fotovoltaiche un approccio ingegneristico, innovativo, digitale alla principale fonte di energia rinnovabile.</p>
          </div>
        </div>
        
        <div className='row mainCardsStyling'>
          <div className='col-md-4 mb-3'>
          <CardSec imgUrl={images.siamo01} title={'Cristian Testoni'} desc={'Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica.'}/>
          </div>
          <div className='col-md-4 mb-3'>
          <CardSec imgUrl={images.siamo02} title={'Cristian Testoni'} desc={'Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica.'}/>
          </div>
          <div className='col-md-4 mb-3'>
          <CardSec imgUrl={images.siamo03} title={'Cristian Testoni'} desc={'Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica.'}/>
          </div>
        </div>

      </div>

    </>
  )
}

export default MainCards
